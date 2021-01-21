import React, { useContext } from 'react';
import GitSearchContext from '../context/GitSearchContext';
import { UserContainer, ReposButton } from '../styles';

export default function UserInfo() {
  const { userInfo, setRepositoriesShow, repositoriesShow } = useContext(
    GitSearchContext
  );

  const handleShowRepositoriesButton = () => {
    if (!repositoriesShow) {
      setRepositoriesShow(true);
    } else {
      setRepositoriesShow(false);
    }
  };

  return (
    <section>
      {userInfo.message ? (
        <p data-testid='notfound'>Nenhum usuário encontrado.</p>
      ) : null}
      {userInfo.name ? (
        <UserContainer>
          {userInfo.avatar_url ? (
            <img src={userInfo.avatar_url} alt='user-avatar' width='250px' />
          ) : null}
          <div>
            {userInfo.name ? (
              <p data-testid='user-name'>{userInfo.name}</p>
            ) : null}
            {userInfo.bio ? <p>{userInfo.bio}</p> : null}
            {userInfo.company ? <p>Companhia: {userInfo.company}</p> : null}
            {userInfo.location ? <p>Localização: {userInfo.location}</p> : null}
            {userInfo.blog ? <p>Site Pessoal: {userInfo.blog}</p> : null}
            {userInfo.followers ? (
              <p>Seguidores: {userInfo.followers}</p>
            ) : null}
            {userInfo.following ? <p>Seguindo: {userInfo.following}</p> : null}
            {userInfo.public_repos ? (
              <p>Repositórios: {userInfo.public_repos}</p>
            ) : null}
          </div>
        </UserContainer>
      ) : null}
      {userInfo.public_repos && userInfo.public_repos > 0 ? (
        <ReposButton
          data-testid='repos-button-show'
          type='button'
          onClick={handleShowRepositoriesButton}
        >
          Ver Repositórios
        </ReposButton>
      ) : null}
    </section>
  );
}
