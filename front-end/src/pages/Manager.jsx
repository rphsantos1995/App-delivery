import React from 'react';
import { useLocation } from 'react-router-dom';

function Manager() {
  const { state } = useLocation();
  return (
    <div>{`Manager is ${state.role} and his name is ${state.name}`}</div>
  );
}

export default Manager;
