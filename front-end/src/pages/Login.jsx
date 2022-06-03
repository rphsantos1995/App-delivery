import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTokenUser from '../helpers/useTokenUser';
import Input from '../components/Inputs/Default';
import testId from '../helpers/dataTestIds';
import Button from '../components/Buttons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const user = useTokenUser();
  const Navigate = useNavigate();

  useEffect(() => {
    if (user.payload) {
      const { role, name } = user.payload;
      switch (role) {
      case 'administrator':
        return Navigate('/manager', { state: { role, name } });
      case 'seller':
        return Navigate('/orders', { state: { role, name } });
      default:
        return Navigate('/products', { state: { role, name } });
      }
    }
  }, [Navigate, user]);

  useEffect(() => {
    // regex from https://pt.stackoverflow.com/q/1386
    const testeEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
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
          textButton="Login"
          classButton="btn-1"
          testId={ testId[3] }
          disabled={ isDisabled }
        />
        <Button
          textButton="Ainda não tenho conta"
          classButton="btn-3"
          testId={ testId[4] }
          disabled={ false }
        />
      </form>
      <span data-testid={ testId[5] }> MENSAGEM de ERRO do back hidden</span>
    </main>
  );
}
