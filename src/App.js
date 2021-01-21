import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/searchpage' component={SearchPage} />
    </Switch>
  );
}

export default App;
