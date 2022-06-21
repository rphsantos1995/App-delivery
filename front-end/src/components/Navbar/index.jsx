import PropTypes from 'prop-types';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import testId from '../../helpers/dataTestIds';
import Buttons from '../Buttons';
import ExitButton from './ExitButton';
import User from './User';
import useTokenUser from '../../helpers/useTokenUser';
import { eleven, twelve } from '../../helpers/numbers';
import UserContext from '../../context/UserContext';

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
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const onMount = [() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (!localStorageUser) Navigate('/login');
    if (currUser) {
      const username = localStorageUser.name;
      const { role } = currUser;
      setCurrentUser({ ...currUser, name: username });
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
        { currentUser
          && <User
            testId={ testId[13] }
            name={ currentUser.name || '' }
          />}
        <ExitButton
          clicked={ () => {
            setCurrentUser({});
            localStorage.clear();
          } }
        />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default Navbar;
