import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ValueTotal from '../components/CustomerCheckout/ValueTotal';
import Navbar from '../components/Navbar';
import ProductsContext from '../context/ProductsContext';
import testId from '../helpers/dataTestIds';
import sumTotalPriceCart from '../utils/sumTotalPriceCart';
import UserContext from '../context/UserContext';
import { requestGet, requestPut } from '../services/api';
import { four } from '../helpers/numbers';
import { DetailRoleIds } from '../helpers/roleIds';
import Buttons from '../components/Buttons';

export default function OrderDetails() {
  const { cart, setAllTotalPrice } = useContext(ProductsContext);
  const { currentUser } = useContext(UserContext);
  const orderId = useParams().id;

  const path = useLocation().pathname;
  const role = path.slice(1).split(/[/]/)[0];
  const [order, setOrder] = useState({ status: '' });

  const {
    orderNum, orderDate, orderStatus, itemNumber,
    itemQty, itemUnitValue, itemSubTotal, itemDescr, orderTotal,
  } = DetailRoleIds[role];

  const requestOrder = async () => {
    if (currentUser) {
      const endpoint = `/sales/${orderId}`;
      const userOrders = await requestGet(endpoint);
      if (Object.keys(userOrders).includes('data')) {
        setOrder(userOrders.data);
      }
    }
  };

  useEffect(requestOrder, [currentUser]);

  const updateOrder = (status) => {
    const endpoint = `/sales/${orderId}`;
    const body = { status };
    requestPut(endpoint, body)
      .then(requestOrder);
  };

  useEffect(() => {
    if (cart.length > 0) {
      const sum = sumTotalPriceCart(cart);
      setAllTotalPrice(sum);
    } else {
      setAllTotalPrice(0);
    }
  }, [cart, setAllTotalPrice]);

  const buttons = {
    seller: [
      <Buttons
        key="btn-1"
        testId={ testId[56] }
        textButton="Preparar Pedido"
        classButton="btn-1"
        clicked={ () => updateOrder('Preparando') }
        disabled={ order.status !== 'Pendente' }
      />,
      <Buttons
        key="btn-0"
        testId={ testId[57] }
        textButton="Saiu para entrega"
        classButton="btn-0"
        clicked={ () => updateOrder('Em Trânsito') }
        disabled={ order.status !== 'Preparando' }
      />,
    ],
    customer: [
      <Buttons
        key="btn-0"
        testId={ testId[47] }
        textButton="Marcar como entregue"
        classButton="btn-1"
        clicked={ () => updateOrder('Entregue') }
        disabled={ order.status !== 'Em Trânsito' }
      />,
    ],
  };

  return (
    <main>
      <Navbar userRole={ role } />
      <h1>Detalhes do Produto</h1>
      {Object.keys(order).includes('seller') && (
        <div>
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
                <p data-testid={ testId[38] }>{order.seller.name}</p>
              </span>
            )}
            <span>
              <p>Data</p>
              <p data-testid={ testId[orderDate] }>
                {new Date(order.saleDate).toLocaleDateString('pt-BR')}
              </p>
            </span>
            <span data-testid={ testId[orderStatus] }>{order.status}</span>
            { buttons[role] }
          </div>

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
              {order.products.map(
                ({ id, name, SalesProducts: { quantity }, price }, index) => (
                  <tr key={ id }>
                    <td data-testid={ `${testId[itemNumber]}-${index}` }>{index + 1}</td>
                    <td data-testid={ `${testId[itemDescr]}-${index}` }>{name}</td>
                    <td data-testid={ `${testId[itemQty]}-${index}` }>{quantity}</td>
                    <td data-testid={ `${testId[itemUnitValue]}-${index}` }>
                      {(price).replace('.', ',')}
                    </td>
                    <td data-testid={ `${testId[itemSubTotal]}-${index}` }>
                      {
                        (Number(price) * Number(quantity))
                          .toFixed(2)
                          .replace('.', ',')
                      }
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
          <ValueTotal testId={ testId[orderTotal] } allTotalPrice={ order.totalPrice } />
        </div>
      )}
    </main>
  );
}
