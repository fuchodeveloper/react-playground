import React, { Component } from 'react';
import './App.css';

const ListItem = props => {
  return <li>{props.value}</li>;
}

const App = props => {
  const {numbers} = props;
  const listItems = numbers.map((number) =>
    <ListItem 
      key={number.toString()}
      value={number}
    />
  );
  return (
    <ul>{listItems}</ul>
  )
}

export default App;
