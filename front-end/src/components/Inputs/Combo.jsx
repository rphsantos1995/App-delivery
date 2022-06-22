import React from 'react';
import PropTypes from 'prop-types';

export default function Combo({ combo }) {
  return (
    <label htmlFor="combo-input">
      { combo.name }
      <select data-testid={ combo.testId } onChange={ combo.change }>
        {
          combo.itens.map((item) => (
            <option key={ item } value={ item.id }>{ item.name }</option>
          ))
        }
      </select>
    </label>
  );
}

Combo.propTypes = {
  combo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    itens: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    testId: PropTypes.string.isRequired,
    change: PropTypes.func,
  }).isRequired,
};
