import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';
// import store from './store/store';
// import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>  */}
      <App />
    {/* </Provider> */}
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);