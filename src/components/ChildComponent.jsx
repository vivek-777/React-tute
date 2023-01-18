import shallowCompare from 'react-addons-shallow-compare';
import { Component } from 'react';

class ChildComponent extends Component{
  
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render(){
    console.log(">>>>>>>>>>>child>>>>>>>>>>>>")
    return (
      <>
        {this.props.message}
      </>
    )
  }
}

export default ChildComponent;