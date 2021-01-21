import React from 'react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import SearchPage from '../pages/SearchPage';

describe('Test Search Page', () => {
  it('Test Header', () => {
    const { getByTestId } = renderWithRouter(<SearchPage />);
    const logoImg = getByTestId('logo-img');
    const title = getByTestId('title-search');
    const logoutButton = getByTestId('logout-button');
    expect(logoImg).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('Test Logout Button', () => {
    const { getByTestId, history } = renderWithRouter(<SearchPage />);
    const logoutButton = getByTestId('logout-button');
    userEvent.click(logoutButton);
    expect(logoutButton).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Test Searchbar Elements', () => {
    const { getByTestId } = renderWithRouter(<SearchPage />);
    const searchButton = getByTestId('searchbar-button');
    const searchLabel = getByTestId('searchbar-label');
    const searchInput = getByTestId('searchbar-input');
    expect(searchButton).toBeInTheDocument();
    expect(searchLabel).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it('Test search Notfound', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(<SearchPage />);
    const searchButton = getByTestId('searchbar-button');
    const searchInput = getByTestId('searchbar-input');
    userEvent.type(searchInput, 'gaearonffff');
    userEvent.click(searchButton);
    await findByTestId('notfound');
    const notFound = getByTestId('notfound');
    expect(notFound).toBeInTheDocument();
    expect(notFound.innerHTML).toBe('Nenhum usuário encontrado.');
  });

  it('Test search result return', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(<SearchPage />);
    const searchButton = getByTestId('searchbar-button');
    const searchInput = getByTestId('searchbar-input');
    userEvent.type(searchInput, 'gaearon');
    userEvent.click(searchButton);
    await findByTestId('user-name');
    const user = getByTestId('user-name');
    expect(user).toBeInTheDocument();
  });

  it('Test show repository button', async () => {
    const { getByTestId, findByTestId, queryByTestId } = renderWithRouter(
      <SearchPage />
    );
    const reposButton = queryByTestId('repos-button-show');
    expect(reposButton).not.toBeInTheDocument();
    const searchButton = getByTestId('searchbar-button');
    const searchInput = getByTestId('searchbar-input');
    userEvent.type(searchInput, 'gaearon');
    userEvent.click(searchButton);
    await findByTestId('repos-button-show');
    const reposButtonShow = getByTestId('repos-button-show');
    expect(reposButtonShow).toBeInTheDocument();
  });

  it('Test show repositories card', async () => {
    const {
      getByTestId,
      findByTestId,
      queryAllByTestId,
      findAllByTestId,
    } = renderWithRouter(<SearchPage />);
    const searchButton = getByTestId('searchbar-button');
    const searchInput = getByTestId('searchbar-input');
    userEvent.type(searchInput, 'gaearon');
    userEvent.click(searchButton);
    await findByTestId('repos-button-show');
    const reposButtonShow = getByTestId('repos-button-show');
    userEvent.click(reposButtonShow);
    await findAllByTestId('repos-card');
    const reposCards = queryAllByTestId('repos-card');
    expect(reposCards.length).not.toBe(0);
  });
});
