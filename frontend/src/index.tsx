import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);