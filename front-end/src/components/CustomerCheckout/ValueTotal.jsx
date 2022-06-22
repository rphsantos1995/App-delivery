import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from '../../context/ProductsContext';
import testId from '../../helpers/dataTestIds';

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
