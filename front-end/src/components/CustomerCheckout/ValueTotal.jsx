import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../../context/ProductsContext';

export default function ValueTotal({ testId }) {
  const { allTotalPrice } = useContext(ProductsContext);

  return (
    <span data-testid={ testId }>
      Valor:
      { allTotalPrice }
    </span>
  );
}

ValueTotal.propTypes = {
  testId: PropTypes.string.isRequired,
};
