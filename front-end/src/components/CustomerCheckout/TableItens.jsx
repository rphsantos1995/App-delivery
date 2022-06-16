import React, { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';
import testId from '../../helpers/dataTestIds';

export default function TableItens() {
  const { cart } = useContext(ProductsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map(({ id, name, quantity, price }, index) => (
            <tr key={ id }>
              <td data-testid={ `${testId[22]}${index}` }>{ index + 1 }</td>
              <td data-testid={ `${testId[23]}${index}` }>{ name }</td>
              <td data-testid={ `${testId[24]}${index}` }>{ quantity }</td>
              <td data-testid={ `${testId[25]}${index}` }>
                { String(price).replace('.', ',') }
              </td>
              <td data-testid={ `${testId[26]}${index}` }>
                { String(price * quantity).replace('.', ',') }
              </td>
              <td data-testid={ `${testId[27]}${index}` }>
                <button type="button">Remover</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
