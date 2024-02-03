import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Provider from './Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);