import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
import App from './App';

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>Water would boil</p>
  }
  return <p>Water wouldn't boil.</p>
}

ReactDOM.render(
  <BoilingVerdict />,
  document.getElementById('root')
);
