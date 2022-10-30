import React from 'react';
import PropTypes from 'prop-types';
import testId from '../../helpers/dataTestIds';
import OrderStatus from './OrderStatus';
import { OrderRoleIds } from '../../helpers/roleIds';
import { four } from '../../helpers/numbers';
import brasil from '../../helpers/formats';

export default function OrderCard({ role, order }) {
  return (
    <section
      className="order-card"
      data-testid={ `${testId[OrderRoleIds[role].orderNum]}${order.id}` }
    >
      <p className="order-number">
        Pedido
        <br />
        {String(order.id).padStart(four, '0')}
      </p>
      <div className="order-card-right">
        <div className="order-card-upper-right">
          <OrderStatus
            status={ order.status }
            testIdNum={ `${testId[OrderRoleIds[role].orderStats]}${order.id}` }
          />
          <div className="order-card-info">
            <span data-testid={ `${testId[OrderRoleIds[role].orderDate]}${order.id}` }>
              {new Date(order.saleDate).toLocaleDateString('pt-BR')}
            </span>
            <span data-testid={ `${testId[OrderRoleIds[role].orderValue]}${order.id}` }>
              {new Intl.NumberFormat(...brasil).format(Number(order.totalPrice))}
            </span>
          </div>
        </div>
        { role === 'seller' && (
          <span data-testid={ testId[52] }>
            {`${order.deliveryAddress}, ${order.deliveryNumber}`}
          </span>)}
      </div>
    </section>
  );
}

OrderCard.propTypes = {
  role: PropTypes.string.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
