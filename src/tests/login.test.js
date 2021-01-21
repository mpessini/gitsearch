import React from 'react';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';
import userEvent from '@testing-library/user-event';

describe('Test Login Page', () => {
  it('Test elements on screen', async () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const logoImg = getByTestId('logo-img');
    const title = getByTestId('title-login');
    const usernameLabel = getByTestId('username-label');
    const usernameInput = getByTestId('username-input');
    const passwordLabel = getByTestId('password-label');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-button');
    expect(logoImg).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('Test login on fail', async () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const usernameInput = getByTestId('username-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-button');
    userEvent.type(usernameInput, 'userunknown');
    userEvent.type(passwordInput, 'swordfish');
    userEvent.click(loginButton);
    const wrongMessage = getByTestId('wrong-message');
    expect(wrongMessage).toBeInTheDocument();
  });

  it('Test login on success', async () => {
    const { getByTestId, history } = renderWithRouter(<Login />);
    const usernameInput = getByTestId('username-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-button');
    userEvent.type(usernameInput, 'admin');
    userEvent.type(passwordInput, 'password');
    userEvent.click(loginButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/searchpage');
  });
});
