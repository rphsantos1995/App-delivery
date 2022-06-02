import React from 'react';
import PropTypes from 'prop-types';

export default function Combo({ combo }) {
  return (
    <label htmlFor="combo-input">
      { combo.name }
      <select>
        {
          combo.itens.map((item) => (
            <option key={ item }>{ item }</option>
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
      PropTypes.string,
    ),
  }).isRequired,
};