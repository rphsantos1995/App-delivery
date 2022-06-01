import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const valores = {
    currentUser,
    setCurrentUser,
  };
  return (
    <main>
      <UserContext.Provider value={ valores }>
        { children }
      </UserContext.Provider>
    </main>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
