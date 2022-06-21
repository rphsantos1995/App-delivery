import React, { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';
import testId from '../../helpers/dataTestIds';
import PropTypes from 'prop-types';

export default function ValueTotal({ valueId }) {
  const { allTotalPrice } = useContext(ProductsContext);

  return (
    <span data-testid={ testId[valueId] }>
      Valor:
      { allTotalPrice }
    </span>
  );
}

ValueTotal.propTypes = {
  valueId: PropTypes.number.isRequired,
};
