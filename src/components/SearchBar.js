import React, { useContext } from 'react';
import GitSearchContext from '../context/GitSearchContext';
import fetchUserInfo from '../service/FetchUserInfo';
import fetchRepositoriesList from '../service/FetchRepositoriesList';
import { SearchBarStyle } from '../styles';

export default function SearchBar() {
  const { setUserInfo, setRepositoryList, setRepositoriesShow } = useContext(
    GitSearchContext
  );

  const handleSearchButton = () => {
    const searchInput = document.getElementById('usersearch').value;
    fetchUserInfo(setUserInfo, searchInput);
    fetchRepositoriesList(setRepositoryList, searchInput);
    setRepositoriesShow(false);
  };

  return (
    <SearchBarStyle>
      <div>
        <label data-testid='searchbar-label' htmlFor='usersearch'>
          Busca de usuário
          <input
            id='usersearch'
            type='text'
            name='usersearch'
            data-testid='searchbar-input'
          />
        </label>
      </div>
      <button
        type='button'
        data-testid='searchbar-button'
        onClick={handleSearchButton}
      >
        Buscar
      </button>
    </SearchBarStyle>
  );
}
