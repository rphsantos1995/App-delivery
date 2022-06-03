import React from 'react';
import PropTypes from 'prop-types';
import testId from '../../helpers/dataTestIds';
import Counter from '../Inputs/Counter';

export default function CardProduct({ price, image, name, index }) {
  const addToCart = (quantity) => {
    const product = {
      product: {
        price,
        image,
        name,
      },
      quantity,
    };

    localStorage.setItem('carrinho', JSON.stringify(product));
  };

  return (
    <div className="card-product">
      <span className="price" data-testid={ `${testId[16]}${index}` }>
        { price }
      </span>
      <img src={ image } alt={ name } data-testid={ `${testId[17]}${index}` } />
      <p data-testid={ `${testId[15]}${index}` }>{ name }</p>
      <Counter
        addToCart={ addToCart }
        index={ index }
      />
    </div>
  );
}

CardProduct.propTypes = {
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
