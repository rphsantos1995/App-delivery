// import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Input from '../components/Inputs/Default';
import testId from '../helpers/dataTestIds';
import Button from '../components/Buttons';
import roles from '../helpers/roles';

function Manager() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setRole] = useState('');
  const [username, setUserName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  // const { state } = useLocation();
  const allRoles = roles;

  const handleChange = ({ target }) => {
    const { id, value } = target;
    if (id === 'username') {
      setUserName(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
    if (id === 'select') {
      setRole(value);
    }
  };

  useEffect(() => {
    const testeEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(.[a-z]+)?$/i;
    const passLength = 6;
    const nameLength = 12;
    const roleLength = 1;
    const teste = testeEmail.test(email) && password.length >= passLength
    && username.length >= nameLength && selectedRole.length > roleLength;
    setIsDisabled(!teste);
  }, [email, password, username, selectedRole]);

  return (
    <main>
      <h2>Tela do admin</h2>
      <form action="">
        <Input
          name="name"
          id="username"
          type="name"
          placeholder="Full name"
          testId={ testId[64] }
          change={ handleChange }
        />
        <Input
          name="Login"
          id="email"
          type="email"
          placeholder="email@email.com"
          testId={ testId[65] }
          change={ handleChange }
        />
        <Input
          name="Senha"
          id="password"
          type="password"
          placeholder="**********"
          testId={ testId[66] }
          change={ handleChange }
        />
        <select
          data-testid={ testId[67] }
          name="roles"
          defaultValue=""
          id="select"
          onChange={ handleChange }
        >
          {allRoles.map(
            (role, key) => <option key={ key } value={ role }>{role}</option>,
          )}
        </select>
        <Button
          type="button"
          textButton="Create user"
          classButton="btn-1"
          testId={ testId[68] }
          disabled={ isDisabled }
          clicked={ () => console.log('user created') }
        />
      </form>
      {/* <div>{`Manager is ${state.role} and his name is ${state.name}`}</div> */}
    </main>
  );
}

export default Manager;
