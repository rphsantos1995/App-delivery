import React from 'react';
import Input from '../components/Inputs/Default';
import testId from '../helpers/dataTestIds';
import LoginButton from '../components/Buttons';

export default function Login() {
  return (
    <main>
      <form action="">
        <Input
          name="Login"
          type="email"
          placeholder="email@email.com"
          testId={ testId[1] }
        />
        <Input
          name="Senha"
          type="password"
          placeholder="insiraopasswordaqui"
          testId={ testId[2] }
        />
        <LoginButton
          textButton="Login"
          classButton="btn-1"
          testId={ testId[3] }
        />
        <LoginButton
          textButton="Ainda não tenho conta"
          classButton="btn-3"
          testId={ testId[4] }
        />
      </form>
      <span data-testid={ testId[5] }> MENSAGEM de ERRO do back hidden</span>
    </main>
  );
}
