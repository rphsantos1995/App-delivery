import React from 'react';
import PropTypes from 'prop-types';
import testId from '../../helpers/dataTestIds';
import OrderStatus from './OrderStatus';
import roleIds from '../../helpers/roleIds';

export default function OrderCard({ role, status }) {
  return (
    <section className="order-card">
      <p
        data-testid={ testId[roleIds[role].orderNum] }
        className="order-number"
      >
        Pedido n
      </p>
      {/* Alterar para ser dinamico de acordo com a api */}
      <div className="order-card-right">
        <div className="order-card-upper-right">
          <OrderStatus status={ status } testIdNum={ testId[roleIds[role].orderStats] } />
          <div className="order-card-info">
            <span data-testid={ testId[roleIds[role].orderDate] }> Data </span>
            <span data-testid={ testId[roleIds[role].orderValue] }> Value </span>
          </div>
        </div>
        { role === 'seller'
        && <span data-testid={ testId[52] }> Endereço </span>}
      </div>
    </section>
  );
}

OrderCard.propTypes = {
  role: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
