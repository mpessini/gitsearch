import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GitSearchContext from '../context/GitSearchContext';

export default function GitSearchProvider({ children }) {
  const [isValid, setValid] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [repositoryList, setRepositoryList] = useState([]);
  const [repositoriesShow, setRepositoriesShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [repositoryInfo, setRepositoryInfo] = useState({
    loading: 'Carregando...',
  });

  const context = {
    isValid,
    setValid,
    userInfo,
    setUserInfo,
    repositoryList,
    setRepositoryList,
    repositoriesShow,
    setRepositoriesShow,
    modalIsOpen,
    setModalIsOpen,
    repositoryInfo,
    setRepositoryInfo,
  };

  return (
    <GitSearchContext.Provider value={context}>
      {children}
    </GitSearchContext.Provider>
  );
}

GitSearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
