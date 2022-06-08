import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import testId from '../../helpers/dataTestIds';
import ProductsContext from '../../context/ProductsContext';

export default function Counter({ index, product }) {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(ProductsContext);

  const isProductInCart = (data) => !!(cart.find(({ id }) => id === data.id));

  const addToCart = (dataProduct) => {
    const cartUpdated = isProductInCart(dataProduct)
      ? cart.map((existingProduct) => (
        existingProduct.id === dataProduct.id
          ? { ...existingProduct, quantity }
          : existingProduct
      ))
      : [...cart, { ...dataProduct, quantity }];

    const cartFinal = cartUpdated.filter((item) => item.quantity > 0);

    setCart(cartFinal);
  };

  useEffect(() => {
    addToCart(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('carrinho', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <div className="counter">
      <button
        type="button"
        className="btn-counter"
        onClick={ () => {
          setQuantity((prevCount) => prevCount - 1);
        } }
        data-testid={ `${testId[18]}${index}` }
        disabled={ quantity === 0 }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        data-testid={ `${testId[20]}${index}` }
        onChange={ ({ target }) => setQuantity(Number(target.value)) }
      />
      <button
        type="button"
        className="btn-counter"
        onClick={ () => {
          setQuantity((prevCount) => prevCount + 1);
        } }
        data-testid={ `${testId[19]}${index}` }
      >
        +
      </button>

    </div>
  );
}

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
