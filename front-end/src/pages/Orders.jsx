import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import OrderCard from '../components/Order/OrderCard';
import UserContext from '../context/UserContext';
import { requestGet } from '../services/api';

export default function Orders() {
  const path = useLocation().pathname;
  const role = path.slice(1).split(/[/]/)[0];
  const [orders, setOrders] = useState([]);
  const { currentUser } = useContext(UserContext);

  const onMount = [async () => {
    if (currentUser) {
      const { id } = currentUser;
      const endpoint = `/sales?id=${id}&role=${role}`;
      const userOrders = await requestGet(endpoint);
      if (Object.keys(userOrders).includes('data')) {
        setOrders(userOrders.data);
      }
    }
  }, [currentUser]];

  useEffect(...onMount);

  return (
    <main>
      {currentUser ? (
        <div>
          <Navbar userRole={ role } />
          <section>
            {
              orders.map((order) => (
                <Link
                  to={ `/${role}/orders/${order.id}` }
                  key={ `order-${order.id}` }
                >
                  <OrderCard
                    key={ `order-${order.id}` }
                    role={ role }
                    order={ order }
                  />
                </Link>
              ))
            }
          </section>
        </div>
      ) : <span>Loading</span>}
    </main>
  );
}
