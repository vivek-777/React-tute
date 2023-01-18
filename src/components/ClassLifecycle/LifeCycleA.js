import React,{ Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'abc'
    }
    // console.log("LifeCycleA constructor(props)")
  }

  static getDerivedStateFromProps(){
    // console.log("LifeCycleA getDerivedStateFromProps()")
  }

  getSnapshotBeforeUpdate(){
    console.log("LifeCycleA getSnapshotBeforeUpdate()");
    return null
  }

  shouldComponentUpdate(){
    console.log("LifeCycleA shouldComponentUpdate()");
    return true
  }

  componentDidUpdate(){
    console.log("LifeCycleA componentDidUpdate()");
  }

  componentDidMount(){
    // console.log("LifeCycleA componentDidMount()")
  }

  handleClick=()=>{
    this.setState({
      name: 'abc'
    })
  }

  render(){
    // console.log("LifeCycleA render()")
    return (

      <><button onClick={this.handleClick}>click me {this.state.name}</button><div>LifeCycle A<LifeCycleB /></div></>
    );
  }

}

export default LifeCycleA;