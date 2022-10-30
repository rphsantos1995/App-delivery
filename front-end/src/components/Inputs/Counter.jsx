import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import testId from '../../helpers/dataTestIds';
import ProductsContext from '../../context/ProductsContext';
import handleCart from '../../utils/handleCart';

export default function Counter({ index, product }) {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(ProductsContext);

  const updateCartQuantity = () => {
    const found = cart.find(({ id }) => id === product.id);
    if (found) setQuantity(found.quantity);
  };

  useEffect(updateCartQuantity, [product.id]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('carrinho', JSON.stringify(cart));
    }
  }, [cart]);

  const handleClick = (action) => {
    if (quantity === 1 && action === 'remove') {
      const cartJSON = JSON.parse(localStorage.getItem('carrinho'));
      const found = cartJSON.find(({ id }) => id === product.id);
      const filtered = cartJSON.filter((item) => item !== found);
      localStorage.setItem('carrinho', JSON.stringify(filtered));
    }

    const result = handleCart(cart, product, action);
    setCart(result);
  };

  return (
    <div className="counter">
      <button
        type="button"
        className="btn-counter"
        onClick={ () => {
          setQuantity((prevCount) => prevCount - 1);
          handleClick('remove');
        } }
        data-testid={ `${testId[19]}${index}` }
        disabled={ quantity === 0 }
      >
        -
      </button>
      <input
        type="text"
        value={ quantity }
        data-testid={ `${testId[20]}${index}` }
        onChange={ ({ target }) => {
          setQuantity(Number(target.value));
          handleClick(Number(target.value));
        } }
      />
      <button
        type="button"
        className="btn-counter"
        onClick={ () => {
          setQuantity((prevCount) => prevCount + 1);
          handleClick('add');
        } }
        data-testid={ `${testId[18]}${index}` }
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
    price: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
