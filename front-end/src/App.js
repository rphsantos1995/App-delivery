import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import UserProvider from './context/UserProvider';
import Login from './pages/Login';
import Manager from './pages/Manager';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/register" element={ <Register /> } />
        <Route path="/orders" element={ <Orders /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/manager" element={ <Manager /> } />
        <Route exact path="/" element={ <Navigate to="/login" /> } />
      </Routes>
    </UserProvider>
  );
}

export default App;
