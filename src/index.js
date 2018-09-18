import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
import App from './App';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }


  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    console.log(`Value: ${this.state.value}`)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}
ReactDOM.render(
  <NameForm/>,
  document.getElementById('root')
);
