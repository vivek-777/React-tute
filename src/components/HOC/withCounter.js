import React, { useState } from "react";

const withCounter = (WrappedComponent, incrementCount) => {
  return (props) => {
    const [count, setCount] = useState(0);
  
    const incrementCounter = () => {
      setCount(count + incrementCount);
    };
    console.log(WrappedComponent)
  
    return <WrappedComponent incrementCounter={incrementCounter} count={count} {...props} />
  }
}

export default withCounter;

/*

import React, { Component } from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends Component {
    constructor(props){
      super(props);
      this.state = {
        count: 0
      };
    }

    incrementCounter = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber }
      });
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          count = {count}
          incrementCounter = {this.incrementCounter}
          {...this.props}
        />
      )
    }
  }
  return WithCounter;
}

export default withCounter;

*/