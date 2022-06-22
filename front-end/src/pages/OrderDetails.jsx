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
import { DetailRoleIds } from '../helpers/roleIds';
import Buttons from '../components/Buttons';

export default function OrderDetails() {
  const { cart, setAllTotalPrice } = useContext(ProductsContext);
  const { currentUser } = useContext(UserContext);
  const orderId = useParams().id;

  const path = useLocation().pathname;
  const role = path.slice(1).split(/[/]/)[0];
  const [order, setOrder] = useState([]);

  const {
    orderNum, orderDate, orderStatus, itemNumber,
    itemQty, itemUnitValue, itemSubTotal, itemDescr,
  } = DetailRoleIds[role];

  const buttons = {
    seller: [
      <Buttons
        key="btn-0"
        testId={ testId[58] }
        textButton="Saiu para entrega"
        classButton="btn-0"
        clicked={ () => null }
      />,
      <Buttons
        key="btn-1"
        testId={ testId[57] }
        textButton="Preparar Pedido"
        classButton="btn-1"
        clicked={ () => null }
      />,
    ],
    customer: [
      <Buttons
        key="btn-0"
        testId={ testId[47] }
        textButton="Marcar como entregue"
        classButton="btn-1"
        clicked={ () => null }
      />,
    ],
  };

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
            <p data-testid={ testId[orderNum] }>
              {String(order.id).padStart(four, '0')}
            </p>
          </span>
          { role === 'customer' && (
            <span>
              <p>P.Vendedora</p>
              <p data-testid={ testId[38] }>{order.sellerId}</p>
            </span>
          )}
          <span>
            <p>Data</p>
            <p data-testid={ testId[orderDate] }>
              {new Date(order.saleDate).toLocaleDateString('pt-BR')}
            </p>
          </span>
          <span data-testid={ testId[orderStatus] }>Entregue</span>
          { buttons[role] }
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
              <td data-testid={ `${testId[itemNumber]}-${index}` }>{index + 1}</td>
              <td data-testid={ `${testId[itemDescr]}-${index}` }>{name}</td>
              <td data-testid={ `${testId[itemQty]}-${index}` }>{quantity}</td>
              <td data-testid={ `${testId[itemUnitValue]}-${index}` }>
                {(price).replace('.', ',')}
              </td>
              <td data-testid={ `${itemSubTotal}-${index}` }>
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
