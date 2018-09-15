import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    let id = 5;
    return (
      <button onClick={(e) => this.handleClick(id, e)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default App;
