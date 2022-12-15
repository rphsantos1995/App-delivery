import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Inputs/Default';
import testId from '../helpers/dataTestIds';
import Button from '../components/Buttons';
import { createUser } from '../services/api';
import useTokenUser from '../helpers/useTokenUser';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [failedRegister, setFailedRegister] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const user = useTokenUser();
  const Navigate = useNavigate();

  const redirectPage = () => {
    if (user.payload) {
      const { role, name } = user.payload;
      return Navigate('/customer/products', { state: { role, name } });
    }
  };

  useEffect(redirectPage, [user, isLogged, failedRegister]);

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
  };

  const setLocalStorage = ({ token, name, email: usermail, role }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ name, email: usermail, role }));
  };

  const create = async (event) => {
    event.preventDefault();
    const endpoint = '/register';

    const result = await createUser(endpoint, { username, email, password });

    if (result.token) {
      setLocalStorage(result);
      setIsLogged(true);
    }
    if (!result.token) {
      setErrorMsg(result.response.data);
      setFailedRegister(true);
    }
    return false;
  };

  useEffect(() => {
    const testeEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(.[a-z]+)?$/i;
    const passLength = 6;
    const nameLength = 12;
    const teste = testeEmail.test(email) && password.length >= passLength
    && username.length >= nameLength;
    setIsDisabled(!teste);
  }, [email, password, username]);

  return (
    <main>
      <form action="">
        <Input
          name="name"
          id="username"
          type="name"
          placeholder="Full name"
          testId={ testId[6] }
          change={ handleChange }
        />
        <Input
          name="Login"
          id="email"
          type="email"
          placeholder="email@email.com"
          testId={ testId[7] }
          change={ handleChange }
        />
        <Input
          name="Senha"
          id="password"
          type="password"
          placeholder="**********"
          testId={ testId[8] }
          change={ handleChange }
        />
        <Button
          type="button"
          textButton="Create account"
          classButton="btn-1"
          testId={ testId[9] }
          disabled={ isDisabled }
          clicked={ (event) => create(event) }
        />
      </form>
      {
        (failedRegister)
          ? (
            <span data-testid={ testId[10] }>
              {errorMsg}
            </span>
          ) : null
      }
    </main>
  );
}
