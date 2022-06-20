import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ExitButton({ clicked }) {
  return (
    <button type="button" onClick={ clicked }>
      <Link
        className="exit-button"
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
      >
        Sair
      </Link>
    </button>
  );
}

ExitButton.propTypes = {
  clicked: PropTypes.func.isRequired,
};
