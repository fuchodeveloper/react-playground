import React from 'react';
import {ThemeContext} from './theme-context';

const ThemeButton = props => {
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <button
            {...props}
            style={{backgroundColor: theme.background}}
          />
        )
      }
    </ThemeContext.Consumer>
  )
}

export default ThemeButton;
