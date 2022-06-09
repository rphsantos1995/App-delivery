import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function User({ name, testId }) {
  return (
    <span data-testid={ testId }>
      <Link
        className="user-page"
        to="/user"
      >
        {name}
      </Link>
    </span>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
