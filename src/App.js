import React, { Component } from 'react';
import './App.css';

const App = props => {
  const {unreadMessages} = props;
  return (
    <div>
      <h1>Hello!</h1>
      {
        unreadMessages.length > 0 && 
          <h2>You have {unreadMessages.length} unread messages.</h2>
      }
    </div>
  )
}



export default App;
