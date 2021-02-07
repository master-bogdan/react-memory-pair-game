import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from 'styles/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
