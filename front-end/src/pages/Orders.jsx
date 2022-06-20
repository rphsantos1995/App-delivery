import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import OrderCard from '../components/Order/OrderCard';

export default function Orders() {
  const path = useLocation().pathname;
  const role = path.slice(1).split(/[/]/)[0];
  return (
    <>
      <Navbar userRole={ role } />
      <main>
        <OrderCard role={ role } status="preparando" />
      </main>
    </>
  );
}
