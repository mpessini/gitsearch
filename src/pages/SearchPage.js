import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import UserGitInfo from '../components/UserGitInfo';
import { SearchBody } from '../styles';

function SearchPage() {
  return (
    <SearchBody>
      <Header />
      <SearchBar />
      <UserGitInfo />
    </SearchBody>
  );
}

export default SearchPage;
