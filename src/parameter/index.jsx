import React, { Component } from 'react';

const A = 65;

class Parameter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      letters: Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i))
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(letter) {
    this.setState({ justClicked: letter })
  }

  render() {
    return (
      <div>
        <p>
          Click on any alphabet below to see it show up below
        </p>
        Just clicked: {this.state.justClicked}
        <ul>
          {
            this.state.letters.map(letter =>
              <li key={letter} onClick={() => this.handleClick(letter)}>{letter}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Parameter;
