import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Clock1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps, nextProps) {
    console.log('prevProps', prevProps, 'next', nextProps)
  }

  componentWillUnmount() {
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

const Clock = () => {
  return (
    <div>
      <Clock1 />
      <Clock1 />
      <Clock1 />
    </div>
  )
}

export default Clock;
