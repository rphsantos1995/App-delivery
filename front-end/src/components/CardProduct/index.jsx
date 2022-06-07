import React from 'react';
import PropTypes from 'prop-types';
import testId from '../../helpers/dataTestIds';
import Counter from '../Inputs/Counter';

export default function CardProduct({ id, price, image, name }) {
  const product = {
    id,
    name,
    price,
    image,
  };

  return (
    <div className="card-product">
      <span className="price" data-testid={ `${testId[16]}${id}` }>
        { price.replace('.', ',') }
      </span>
      <img
        src={ image }
        style={ { width: 50 } }
        alt={ name }
        data-testid={ `${testId[17]}${id}` }
      />
      <p data-testid={ `${testId[15]}${id}` }>{ name }</p>
      <Counter
        index={ id }
        product={ product }
      />
    </div>
  );
}

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
