import React, { Component } from 'react';
import './App.css';

const WarningBanner = (props) => {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">Warning!</div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {showWarning: true};
  }

  handleToggleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    const {showWarning} = this.state;

    return (
      <div>
        <WarningBanner warn={showWarning} />
        <button onClick={this.handleToggleClick}>
          {showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}


export default App;
