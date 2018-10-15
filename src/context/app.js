import React, {Component} from 'react';
import {themes} from './theme-context';
import ThemeButton from './theme-button';
import ThemeTogglerButton from './theme-toggler-button';

const ThemeContext = React.createContext('light');

const UserContext = React.createContext({
  name: 'Guest',
});

const Toolbar = props => {
  return (
    <ThemeButton
      onClick={props.changeTheme}
    >Change Theme
    </ThemeButton>
  );
}

class App extends Component {

  render() {
    const {signedInUser, theme} = this.props;

    return (
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={signedInUser}>
            <Layout />
          </UserContext.Provider>
        </ThemeContext.Provider>
    );
  }
}

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  )
}

const Content = () => {
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <UserContext.Consumer>
            {user => (
              <ProfilePage user={user} theme={theme} />
            )}
          </UserContext.Consumer>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default App;
