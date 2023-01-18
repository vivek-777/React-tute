import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
  render(){
    const { incrementCounter, count } = this.props;
    return(
      <h1 onMouseOver={incrementCounter}>Hover {count} times</h1>
    )
  }
}

export default withCounter(HoverCounter, 10);