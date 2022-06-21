import React from 'react';
import PropTypes from 'prop-types';

export default function Default({ type, name, placeholder, testId, id, change }) {
  return (
    <label htmlFor={ `${type}-input` }>
      { name }
      <input
        type={ type }
        placeholder={ placeholder }
        data-testid={ testId }
        id={ id }
        onChange={ change }
      />
    </label>
  );
}

Default.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  change: PropTypes.func,
};

Default.defaultProps = {
  change: () => null,
};
