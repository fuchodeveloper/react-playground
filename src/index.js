import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
import App from './App';

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

const SplitPane = props => (
  <div className="SplitPane">
    <div className="SplitPane-left">
      {props.left}
    </div>
    <div className="SplitPane-right">
      {props.right}
    </div>
  </div>
);

const App1 = () => (
  <SplitPane
    left={<Contacts />}
    right={<Chat />}
  />
);

ReactDOM.render(
  <App1 />,
  document.getElementById('root')
);
