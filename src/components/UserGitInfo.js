import React, { useContext } from 'react';
import GitSearchContext from '../context/GitSearchContext';
import UserInfo from './UserInfo';
import Repositories from './Repositories';

export default function UserGitInfo() {
  const { repositoriesShow } = useContext(GitSearchContext);
  return (
    <div>
      <UserInfo />
      {repositoriesShow ? <Repositories /> : null}
    </div>
  );
}
