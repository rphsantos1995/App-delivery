import PropTypes from 'prop-types';
import React from 'react';
import testId from '../../helpers/dataTestIds';
import Buttons from '../Buttons';
import ExitButton from './ExitButton';
import User from './User';
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

  return (
    <nav>
      <div>
        {menu[userRole].map((button, index) => (
          <Buttons
            key={ button[1] }
            testId={ testId[button[0]] }
            textButton={ button[1] }
            classButton={ index === 0 ? 'btn-1' : 'btn-0' }
          />
        ))}
      </div>
      <div>
        <User name="Artur" />
        {/* substituir o name pelo resultado do fetch da api */}
        <ExitButton />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default Navbar;
