import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

export default function ProductsProvider({ children }) {
  const cartJSON = JSON.parse(localStorage.getItem('carrinho'));
  const cartInital = cartJSON || [];

  const [cart, setCart] = useState(cartInital);
  const [allTotalPrice, setAllTotalPrice] = useState(0);

  const valores = {
    cart,
    setCart,
    allTotalPrice,
    setAllTotalPrice,
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
