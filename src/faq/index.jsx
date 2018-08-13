import React, { Component } from 'react';

const A = 65;

class FAQ extends Component {

  /* handling passing parameter: using data-attributes */
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }

  handleClick(e) {
    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {
            this.state.letters.map(letter =>
              <li key={letter}>{letter}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default FAQ;
