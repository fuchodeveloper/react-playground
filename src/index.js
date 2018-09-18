import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
import App from './App';


class EassyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Essay about fav DOM element',
      selectValue: 'coconut'
    };
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    console.log(`Submission: ${this.state.value} | Fav: ${this.state.selectValue}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Favorite color:
        <select
          multiple={true}
          name="selectValue"
          value={[this.state.selectValue]}
          onChange={this.handleChange}
        >
          <option value="grapefruit">Grape fruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <br /> <br />
      <label>
        Essay: 
        <textarea
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
      <br />
      </form>
    )
  }
}

ReactDOM.render(
  <EassyForm />,
  document.getElementById('root')
);
