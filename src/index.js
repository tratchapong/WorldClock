import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppClock from './AppClock';


ReactDOM.render(
  <React.StrictMode>
    <AppClock />
  </React.StrictMode>,
  document.getElementById('root')
);
