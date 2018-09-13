import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/octocat/orgs')
    .then((response) => {
      console.log('response', response)
    })
    .then((error) => {
      console.log('error', error)
    })
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>The date is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
