import React, { useContext } from 'react';
import Modal from 'react-modal';
import GitSearchContext from '../context/GitSearchContext';
import fetchRepositoryInfo from '../service/FetchRepositoryInfo';
import { ReposCard, ReposList, ModalStyle, ButtonModal } from '../styles';

export default function Repositories() {
  const {
    repositoryList,
    modalIsOpen,
    setModalIsOpen,
    repositoryInfo,
    setRepositoryInfo,
  } = useContext(GitSearchContext);

  const handleModal = (id) => {
    fetchRepositoryInfo(setRepositoryInfo, id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setRepositoryInfo({ loading: 'Carregando...' });
    setModalIsOpen(false);
  };

  return (
    <div>
      <ReposList>
        <ReposCard>
          {repositoryList
            ? repositoryList.map((repository) => (
                <button
                  type='button'
                  data-testid='repos-card'
                  onClick={() => handleModal(repository.id)}
                  key={repository.id}
                >
                  {repository.name}
                </button>
              ))
            : null}
        </ReposCard>
      </ReposList>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          <ButtonModal onClick={closeModal}>X</ButtonModal>
          <ModalStyle>
            {repositoryInfo.loading ? (
              <span>{repositoryInfo.loading}</span>
            ) : null}
            {repositoryInfo.name ? (
              <span>Nome: {repositoryInfo.name}</span>
            ) : null}
            {repositoryInfo.description ? (
              <span>Descrição: {repositoryInfo.description}</span>
            ) : null}
            {repositoryInfo.forks_count >= 0 ? (
              <span>Fork: {repositoryInfo.forks_count}</span>
            ) : null}
            {repositoryInfo.stargazers_count >= 0 ? (
              <span>Star: {repositoryInfo.stargazers_count}</span>
            ) : null}
            {repositoryInfo.language ? (
              <span>Linguagem: {repositoryInfo.language}</span>
            ) : null}
            {repositoryInfo.fork === true ? (
              <span>
                Forked from:{' '}
                <a
                  href={repositoryInfo.source.html_url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {repositoryInfo.source.full_name}
                </a>
              </span>
            ) : null}
            {repositoryInfo.html_url ? (
              <a
                href={repositoryInfo.html_url}
                target='_blank'
                rel='noreferrer'
              >
                Ver no GitHub
              </a>
            ) : null}
          </ModalStyle>
        </Modal>
      </div>
    </div>
  );
}
