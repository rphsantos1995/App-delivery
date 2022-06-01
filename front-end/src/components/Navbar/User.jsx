import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function User(props) {
  const { name } = props;
  return (
    <span>
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
};
