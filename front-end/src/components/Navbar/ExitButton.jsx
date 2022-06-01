import React from 'react';
import { Link } from 'react-router-dom';

export default function ExitButton() {
  return (
    <button type="button">
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
