import React,  {Component} from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemeButton from './theme-button';


const Toolbar = props => {
  return (
    <ThemeButton
      onClick={props.changeTheme}
    >Change Theme
    </ThemeButton>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return (
      <Page>
        <ThemeContext.Provider
          value={this.state.theme}
        >
        <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemeButton />
        </Section>
      </Page>
    )
  }
}

export default App;
