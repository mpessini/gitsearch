import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GitSearchContext from '../context/GitSearchContext';
import logogit from '../images/logogit.png';
import { userLogin } from '../actions';
import { loginData } from '../data';
import { LoginForm, LoginBody, TitleLogin } from '../styles';

function Login() {
  const { isValid, setValid } = useContext(GitSearchContext);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLoginButton = () => {
    const username = document.getElementById('username');
    const userpassword = document.getElementById('userpassword');
    if (
      username.value === loginData.username &&
      userpassword.value === loginData.password
    ) {
      dispatch(userLogin(username.value));
      history.push('/searchpage');
    } else {
      username.value = '';
      userpassword.value = '';
      setValid(false);
    }
  };

  return (
    <LoginBody>
      <img src={logogit} width='80px' alt='logo' data-testid='logo-img' />
      <TitleLogin data-testid='title-login'>Git-Search</TitleLogin>
      <LoginForm>
        <label htmlFor='username' data-testid='username-label'>
          Login
        </label>
        <input
          id='username'
          type='text'
          name='user-name'
          placeholder='Nome de usuário'
          data-testid='username-input'
        />
        <div>
          <label htmlFor='userpassword' data-testid='password-label'>
            Senha
          </label>
          <a href='/'>Esqueceu Senha?</a>
        </div>
        <input
          id='userpassword'
          type='password'
          name='user-password'
          placeholder='Senha'
          data-testid='password-input'
        />
        {!isValid ? (
          <span data-testid='wrong-message'>
            <em>Login ou Senha incorretos.</em>
          </span>
        ) : null}
        <button
          type='button'
          onClick={handleLoginButton}
          data-testid='login-button'
        >
          Entrar
        </button>
      </LoginForm>
    </LoginBody>
  );
}

export default Login;
