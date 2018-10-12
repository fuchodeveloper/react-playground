import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
// import App from './App';

// could be in a different file
const { Provider, Consumer } = createContext('blue');

const App = () => {
  return (
    <Provider value="white">
      <ColorPainter />
    </Provider>
  );
};

const ColorPainter = props => {
  return (
    <div>
      <p><Button /></p>
    </div>
  )
};

const Button = props => {
  return (
    <Consumer>
      {color => <ColorButton {...props} color={color} />}
    </Consumer>
  )
}

class AccessibleModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.timeOutId = null;
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen,
    }));
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({ isOpen: false });
    })
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    return (
      <div
        onBlur={this.onBlurHandler}
        onFocus={this.onFocusHandler}
      >
        <button
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          Select an option
        </button>
        {
          this.state.isOpen ? (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          ) : null
        }
      </div>
    )
  }

}

ReactDOM.render(
  <AccessibleModal />,
  document.getElementById('root')
);
