import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import testId from '../../helpers/dataTestIds';
import Buttons from '../Buttons';
import ExitButton from './ExitButton';
import User from './User';
import useTokenUser from '../../helpers/useTokenUser';
import { eleven, twelve } from '../../helpers/numbers';

function Navbar(props) {
  const { userRole } = props;
  const menu = {
    administrator: [[twelve, 'Gerenciar Usuarios']], // [testId, description]
    seller: [[twelve, 'Pedidos']],
    customer: [
      [eleven, 'Produtos'],
      [twelve, 'Meus Pedidos'],
    ],
  };
  const currUser = useTokenUser().payload;
  const Navigate = useNavigate();
  const [thisUser, setThisUser] = useState();

  const onMount = [() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (!localStorageUser) Navigate('/login');
    if (currUser) {
      const username = localStorageUser.name;
      const { role } = currUser;
      setThisUser({ ...currUser, name: username });
      return role !== userRole && Navigate('/login');
    }
  }, [currUser]];

  useEffect(...onMount);

  return (
    <nav>
      <div>
        {menu[userRole].map((button) => (
          <Buttons
            key={ button[1] }
            testId={ testId[button[0]] }
            textButton={ button[1] }
            classButton="btn-0"
            clicked={ () => null }
          />
        ))}
      </div>
      <div>
        { thisUser
        && <User
          testId={ testId[13] }
          name={ thisUser.name }
        />}
        <ExitButton clicked={ () => localStorage.clear() } />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default Navbar;
