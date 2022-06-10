import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useTokenUser from '../helpers/useTokenUser';
import Input from '../components/Inputs/Default';
import testId from '../helpers/dataTestIds';
import Button from '../components/Buttons';
import { executeLogin } from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [failedLogin, setFailedLogin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const user = useTokenUser();
  const Navigate = useNavigate();

  const effects = [() => {
    if (user.payload) {
      const { role, name } = user.payload;
      switch (role) {
      case 'administrator':
        return Navigate('/manager', { state: { role, name } });
      case 'seller':
        return Navigate('/seller', { state: { role, name } });
      default:
        return Navigate('/customer/products', { state: { role, name } });
      }
    }
  }, [user, isLogged, failedLogin]];

  useEffect(...effects);

  useEffect(() => {
    // regex from https://pt.stackoverflow.com/q/1386 porém modificado para incluir .br corretamente (nem precisava)
    const testeEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(.[a-z]+)?$/i;
    const passLength = 6;
    const teste = testeEmail.test(email) && password.length >= passLength;
    setIsDisabled(!teste);
  }, [email, password]);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    if (id === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const setLocalStorage = ({ token, name, email: usermail, role }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ name, email: usermail, role }));
  };

  const login = async (event) => {
    event.preventDefault();
    const endpoint = '/login';
    const result = await executeLogin(endpoint, { email, password });
    if (Object.keys(result).includes('response')) {
      setErrorMsg(result.response.data.message);
      setFailedLogin(true);
    }
    if (result.token) {
      setLocalStorage(result);
      setIsLogged(true);
    }
    return false;
  };

  return (
    <main>
      <form action="">
        <Input
          name="Login"
          id="email"
          type="email"
          placeholder="email@email.com"
          testId={ testId[1] }
          change={ handleChange }
        />
        <Input
          name="Senha"
          id="password"
          type="password"
          placeholder="**********"
          testId={ testId[2] }
          change={ handleChange }
        />
        <Button
          type="button"
          textButton="Login"
          classButton="btn-1"
          testId={ testId[3] }
          disabled={ isDisabled }
          clicked={ (event) => login(event) }
        />
        <Link to="/register">
          <Button
            type="submit"
            textButton="Ainda não tenho conta"
            classButton="btn-3"
            testId={ testId[4] }
            disabled={ false }
            clicked={ () => false }
          />
        </Link>
      </form>
      {
        (failedLogin)
          ? (
            <span data-testid={ testId[5] }>
              { errorMsg }
            </span>
          ) : null
      }
    </main>
  );
}
