import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderStyle } from '../styles';
import logogit from '../images/logogit.png';

export default function Header() {
  const userName = useSelector((state) => state.username);

  const handleLogoutButton = () => {
    window.location.pathname = '/';
  };

  return (
    <HeaderStyle>
      <section>
        <div>
          <img src={logogit} width='40px' alt='logo' data-testid='logo-img' />
          <h1 data-testid='title-search'>Git-Search</h1>
        </div>
        <div>
          <p data-testid='logged-user'>{userName}</p>
          <button
            data-testid='logout-button'
            type='button'
            onClick={handleLogoutButton}
          >
            Sair
          </button>
        </div>
      </section>
    </HeaderStyle>
  );
}
