import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
import App from './App';


class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    }
  }

  handleInputChange = event => {
    const {
      target, name, type, checked
    } = event;
    const value = type === 'checkbox' 
      ? checked
      : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <label htmlFor="isGoing">
        Is going: <input 
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
        />
        </label>
        <br/>
        <label htmlFor="numberOfGuests">
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    )
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
