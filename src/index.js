import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
// import App from './App';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

const Dialog = props => (
  <FancyBorder color="blue">
    <h1 className="Dialog-title">{props.title}</h1>
    <p className="Dialog-message">{props.message}</p>
    {props.children}
  </FancyBorder>
)

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

class SignUpDialog extends Component {
  state = {login: ''}

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How could we refer to you?"
      >
        <input 
          value={this.state.login}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    )
  }

  handleChange = e => {
    this.setState({login: e.target.value});
  }

  handleSignUp = () => {
    console.log(`Welcome aboard, ${this.state.login}!`);
  }
}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);
