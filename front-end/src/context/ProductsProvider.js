import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

export default function ProductsProvider({ children }) {
  const [cart, setCart] = useState([]);

  const valores = {
    cart,
    setCart,
  };

  return (
    <main>
      <ProductsContext.Provider value={ valores }>
        { children }
      </ProductsContext.Provider>
    </main>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
