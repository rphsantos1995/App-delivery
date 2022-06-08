import React from 'react';
import PropTypes from 'prop-types';

export default function Buttons({
  type, testId, classButton, textButton, disabled, clicked }) {
  return (
    <button
      type={ type || 'button' }
      data-testid={ testId }
      className={ classButton }
      disabled={ disabled }
      onClick={ clicked }
    >
      { textButton }
    </button>
  );
}

Buttons.propTypes = {
  type: PropTypes.string,
  testId: PropTypes.string.isRequired,
  classButton: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  clicked: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  type: 'button',
  disabled: false,
};
