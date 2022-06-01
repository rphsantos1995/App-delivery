import React from 'react';
import PropTypes from 'prop-types';

export default function Default({ input }) {
  return (
    <label htmlFor="default-input">
      { input.name }
      <input type="text" placeholder={ input.placeholder } />
    </label>
  );
}

Default.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
};
