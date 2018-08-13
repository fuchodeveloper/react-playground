import throttle from 'lodash.throttle';
import React, {Component} from 'react';
class LoadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = throttle(this.handleClick, 1000);
  }

  componentWillMount() {
    this.handleClickThrottled.cancel();
  }

  render() {
    return <button onClick={this.handleClickThrottled}>Load More...</button>
  }

  handleClick(){
    // TODO: handle click
    
  }
}

export default LoadMoreButton;
