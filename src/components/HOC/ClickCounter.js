import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
  render(){
    const { incrementCounter, count } = this.props;
    return(
      <button onClick={incrementCounter}>Click {count} times</button>
    )
  }
}

export default withCounter(ClickCounter, 5);