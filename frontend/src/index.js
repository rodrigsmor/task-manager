import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';

import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);