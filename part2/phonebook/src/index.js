import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const persons = []

ReactDOM.render(
  <App persons={persons}/>,
  document.getElementById('root')
);

