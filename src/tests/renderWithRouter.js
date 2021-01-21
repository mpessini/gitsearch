import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import GitSearchProvider from '../provider/GitSearchProvider';
import { Provider } from 'react-redux';
import store from '../store';

function renderWithRouter(component) {
  const history = createMemoryHistory();
  return {
    ...render(
      <Provider store={store}>
        <GitSearchProvider>
          <Router history={history}>{component}</Router>
        </GitSearchProvider>
      </Provider>
    ),
    history,
  };
}

export default renderWithRouter;
