import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
import App from './context/app';

const ListItem = ({value}) => {
  return <li>{value}</li>;
}

const NumberList = props => {
  const {numbers} = props;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
