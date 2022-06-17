import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';
import ProductsContext from '../context/ProductsContext';
import testId from '../helpers/dataTestIds';
import { requestGet } from '../services/api';
import sumTotalPriceCart from '../utils/sumTotalPriceCart';

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
      const sum = sumTotalPriceCart(cart);
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
        data-testid={ testId[79] }
        onClick={ redirectToCheckout }
        disabled={ allTotalPrice === 0 }
      >
        <span>Ver carrinho: </span>
        <span data-testid={ testId[21] }>{ allTotalPrice }</span>
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
