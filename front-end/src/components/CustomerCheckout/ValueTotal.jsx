import React from 'react';
import PropTypes from 'prop-types';

export default function ValueTotal({ testId, allTotalPrice }) {
  return (
    <span data-testid={ testId }>
      Valor:
      { allTotalPrice.replace('.', ',') }
    </span>
  );
}

ValueTotal.propTypes = {
  testId: PropTypes.string.isRequired,
  allTotalPrice: PropTypes.string.isRequired,
};
