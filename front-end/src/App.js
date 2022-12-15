import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import UserProvider from './context/UserProvider';
import ProductsProvider from './context/ProductsProvider';
import Login from './pages/Login';
import Manager from './pages/Manager';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import CustomerCheckout from './pages/CustomerCheckout';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/register" element={ <Register /> } />
          <Route path="/seller" element={ <Navigate to="/seller/orders" /> } />
          <Route path="/seller/orders" element={ <Orders /> } />
          <Route path="/seller/orders/:id" element={ <OrderDetails /> } />
          <Route path="/customer" element={ <Navigate to="/customer/products" /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
          <Route path="/customer/orders" element={ <Orders /> } />
          <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/admin/manage" element={ <Manager /> } />
          <Route exact path="/" element={ <Navigate to="/login" /> } />
        </Routes>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
