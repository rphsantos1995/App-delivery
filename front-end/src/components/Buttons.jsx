import React from 'react';
import PropTypes from 'prop-types';

export default function Buttons({ type }) {
  return (
    <button type="button" data-testid={ type.testId } className={ type.classButton }>
      { type.textButton }
    </button>
  );
}

Buttons.propTypes = {
  type: PropTypes.shape({
    classButton: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    testId: PropTypes.string.isRequired,
  }).isRequired,
};
