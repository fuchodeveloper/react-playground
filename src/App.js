import React, { Component } from 'react';
import './App.css';

// AIM: a HOC that: 
//  1. accepts another component 👏🏼
//  2. has a prop that renders a wrapper div 
class Panel extends Component {
  renderAnchor(anchor) {

  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div style={{ fontWeight: "bold" }}>
        {this.props.children}
      </div>
    )
  }
}

  const data = {
    allItems: [
      {
        id: 1,
        name: 'My Courses',
        subItem: [
          {
            id: 1,
            name: 'Last Active'
          },
          {
            id: 2,
            name: 'Completed'
          }
        ]
      },
      {
        id: 2,
        name: 'Accomplishments'
      },
      {
        id: 3,
        name: 'Recommendations',
        subItem: [
          {
            id: 1,
            name: 'Completed'
          },
        ]
      }
    ]
  }

class PageList extends Component {
  render() {
    return (
      <div>
        <Panel>
          {
            data.allItems.map(item => {
              return (
                <div>
                  <h4>{item.name}</h4>
                  {item.subItem && item.subItem.map(i => (
                      <p>{i.name}</p>
                    ))
                  }
                </div>
              )
            })
          }
        </Panel>
      </div>
    )
  }
}

const App = () => (
  <PageList />
)

export default App;
