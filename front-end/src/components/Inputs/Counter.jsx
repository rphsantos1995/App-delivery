import React, { useState } from 'react';
import PropTypes from 'prop-types';
import testId from '../../helpers/dataTestIds';

export default function Counter({ index, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="counter">
      <button
        type="button"
        className="btn-counter"
        onClick={ () => {
          setQuantity((prevCount) => prevCount - 1);
          addToCart(quantity);
        } }
        data-testid={ `${testId[18]}${index}` }
      >
        -
      </button>
      <input
        type="text"
        value={ quantity }
        data-testid={ `${testId[20]}${index}` }
      />
      <button
        type="button"
        className="btn-counter"
        onClick={ () => {
          setQuantity((prevCount) => prevCount + 1);
          addToCart(quantity);
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
  addToCart: PropTypes.func.isRequired,
};
