import React from 'react';
import PropTypes from 'prop-types';

export default function Buttons({ testId, classButton, textButton }) {
  return (
    <button type="button" data-testid={ testId } className={ classButton }>
      { textButton }
    </button>
  );
}

Buttons.propTypes = {
  testId: PropTypes.string.isRequired,
  classButton: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
};
