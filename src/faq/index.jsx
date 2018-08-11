import React, { Component } from 'react';

const A = 65;

class FAQ extends Component {
  /* handling passing parameter */

  // handleClick = (id) => {
  //   console.log(id+' clicked');
    
  // }
  // render() {
  //   return <button onClick={this.handleClick.bind(this, 1)}>Click to view</button>
  // }

  /* handling passing parameter: using arrow function */

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    }
  }

  handleClick(letter) {
    this.setState({ justClicked: letter });
  }

  render() {
    const { justClicked, letters } = this.state;
    return (
      <div>
        Just clicked: {justClicked}
        <ul>
          {
            letters.map(letter => 
              <li key={letter} onClick={() => this.handleClick(letter)}>{letter}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default FAQ;
