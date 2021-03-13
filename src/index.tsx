import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// disable console.log in production
if (process.env.NODE_ENV === 'production') {
  console.log = function () {};
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
