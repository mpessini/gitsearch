import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import GitSearchProvider from './provider/GitSearchProvider';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GitSearchProvider>
        <App />
      </GitSearchProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
