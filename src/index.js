import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './r-conditional-rendering/App';
import App from './App';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends Component {
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const {scale, temperature} = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    )
  }
}

const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

const toFahrenheit = celsius => (celsius * 9 / 5) + 32;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: ''}
  }

  handleCelsiusChange = temperature => {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange = temperature => {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const {scale, temperature} = this.state;

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput 
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />

        <TemperatureInput 
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </div>
    )
  }
}

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>Water would boil</p>
  }
  return <p>Water wouldn't boil.</p>
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
