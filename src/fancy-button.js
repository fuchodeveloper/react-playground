import React from 'react';
import { ThemeContext } from './theme-context';

class FancyButton extends React.Component {
  focus() {

  }
}

export default React.forwardRef((props, ref) => (
  <ThemeContext.Consumer>
    {
      theme => (
        <FancyButton {...props} theme={theme} ref={ref} />
      )
    }
  </ThemeContext.Consumer>
));
