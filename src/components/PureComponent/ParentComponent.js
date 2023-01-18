import React, { Component } from "react";
import MemoComp from "./MemoComp";
// import PureComp from "./PureComponent";
// import RegularComponent from "./RegularComponent";

class ParentComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Vivek'
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        name: 'Vivek'
      })
    }, 2000);
  }
  
  render(){
    console.log('-----------------Parent-----------------');
    return (
      <>
      <MemoComp name={this.state.name}/>
        {/* <PureComp name={this.state.name} />
        <RegularComponent name={this.state.name} /> */}
      </>
    )
  }
}

export default ParentComponent;