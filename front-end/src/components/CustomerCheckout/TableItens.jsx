import React, { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';
import testId from '../../helpers/dataTestIds';

export default function TableItens() {
  const { cart, setCart } = useContext(ProductsContext);

  const removeToCart = (id) => {
    const cartJSON = JSON.parse(localStorage.getItem('carrinho'));
    const filtered = cartJSON.filter((item) => item.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(filtered));
    setCart(filtered);
  };

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
                {
                  (price * quantity).toFixed(2).replace('.', ',')
                }
              </td>
              <td data-testid={ `${testId[27]}${index}` }>
                <button
                  type="button"
                  onClick={ () => removeToCart(id) }
                >
                  Remover

                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
