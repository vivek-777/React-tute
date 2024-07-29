import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({count, incrementCounter, name}) => {
  return <button onClick={incrementCounter}>Clicked {count} times {name}</button>
}

export default withCounter(ClickCounter, 5);

// Using Class Component

/*
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
*/