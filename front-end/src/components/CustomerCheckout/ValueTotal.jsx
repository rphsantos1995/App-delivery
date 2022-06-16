import React, { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';
import testId from '../../helpers/dataTestIds';

export default function ValueTotal() {
  const { allTotalPrice } = useContext(ProductsContext);

  return (
    <span data-testid={ testId[28] }>
      Valor:
      { allTotalPrice }
    </span>
  );
}
