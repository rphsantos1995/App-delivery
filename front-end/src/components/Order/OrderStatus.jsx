import React from 'react';
import PropTypes from 'prop-types';

export default function OrderStatus({ status = 'pendente', testIdNum }) {
  return (
    <span
      data-testid={ testIdNum }
      className={ `btn-${status}` }
    >
      {status}
    </span>
  );
}

OrderStatus.propTypes = {
  status: PropTypes.string.isRequired,
  testIdNum: PropTypes.string.isRequired,
};
