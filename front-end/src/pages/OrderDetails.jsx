import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ValueTotal from '../components/CustomerCheckout/ValueTotal';
import Navbar from '../components/Navbar';
import ProductsContext from '../context/ProductsContext';
import testId from '../helpers/dataTestIds';
import sumTotalPriceCart from '../utils/sumTotalPriceCart';
import UserContext from '../context/UserContext';
import { requestGet } from '../services/api';
import { four } from '../helpers/numbers';

export default function OrderDetails() {
  const { cart, setAllTotalPrice } = useContext(ProductsContext);
  const { currentUser } = useContext(UserContext);
  const orderId = useParams().id;

  const path = useLocation().pathname;
  const role = path.slice(1).split(/[/]/)[0];
  const [order, setOrder] = useState([]);

  const onMount = [async () => {
    if (currentUser) {
      const { id } = currentUser;
      const endpoint = `/sales?id=${id}&role=${role}`;
      const userOrders = await requestGet(endpoint);
      if (Object.keys(userOrders).includes('data')) {
        setOrder(userOrders.data
          .find((thisOrder) => Number(thisOrder.id) === Number(orderId)));
      }
    }
  }, [currentUser]];

  useEffect(...onMount);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = sumTotalPriceCart(cart);
      setAllTotalPrice(sum);
    } else {
      setAllTotalPrice(0);
    }
  }, [cart, setAllTotalPrice]);

  return (
    <main>
      <Navbar userRole={ role } />
      <h1>Detalhes do Produto</h1>
      {order && (
        <div>
          <span>
            <p>Pedido</p>
            <p>{String(order.id).padStart(four, '0')}</p>
          </span>
          <span>
            <p>P.Vendedora</p>
            <p>{order.sellerId}</p>
          </span>
          <span>
            <p>Data</p>
            <p>{new Date(order.saleDate).toLocaleDateString('pt-BR')}</p>
          </span>
          <span>Entregue</span>
          <button type="button">Marcar como Entregue</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitátio</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, name, quantity, price }, index) => (
            <tr key={ id }>
              <td data-testid={ `${testId[41]}-${index}` }>{index + 1}</td>
              <td data-testid={ `${testId[42]}-${index}` }>{name}</td>
              <td data-testid={ `${testId[43]}-${index}` }>{quantity}</td>
              <td data-testid={ `${testId[44]}-${index}` }>
                {(price).replace('.', ',')}
              </td>
              <td data-testid={ `${testId[45]}-${index}` }>
                {
                  (price * quantity)
                    .toFixed(2)
                    .replace('.', ',')
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ValueTotal valueId={ 46 } />
    </main>
  );
}
