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
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/seller/orders" element={ <Orders /> } />
          <Route exact path="/seller/orders/:id" element={ <OrderDetails /> } />
          <Route exact path="/customer/products" element={ <Products /> } />
          <Route exact path="/customer/checkout" element={ <CustomerCheckout /> } />
          <Route exact path="/customer/orders" element={ <Orders /> } />
          <Route exact path="/customer/orders/:id" element={ <OrderDetails /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/admin/manage" element={ <Manager /> } />
          <Route exact path="/" element={ <Navigate to="/login" /> } />
        </Routes>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
