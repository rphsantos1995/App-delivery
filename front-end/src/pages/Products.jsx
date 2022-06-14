import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';
import ProductsContext from '../context/ProductsContext';
import dataTestIds from '../helpers/dataTestIds';
import { requestGet } from '../services/api';

export default function Products() {
  const { cart, allTotalPrice, setAllTotalPrice } = useContext(ProductsContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await requestGet('/products');
      setProducts(data);
    })();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart
        .map(({ quantity, price }) => quantity * price)
        .reduce((acc, cur) => acc + cur)
        .toFixed(2)
        .replace('.', ',');
      setAllTotalPrice(sum);
    } else {
      setAllTotalPrice(0);
    }
  }, [cart, setAllTotalPrice]);

  const redirectToCheckout = () => {
    navigate('/customer/checkout');
  };

  return (
    <div>
      <Navbar userRole="customer" />
      <p>Tela de produtos</p>
      <button
        type="button"
        data-testid={ dataTestIds[79] }
        onClick={ redirectToCheckout }
        disabled={ allTotalPrice === 0 }
      >
        <span>Ver carrinho: </span>
        <span data-testid={ dataTestIds[21] }>{ allTotalPrice }</span>
      </button>
      {
        products.map((product) => (
          <CardProduct
            key={ product.id }
            id={ product.id }
            price={ product.price }
            image={ product.url_image }
            name={ product.name }
          />
        ))
      }
    </div>
  );
}
