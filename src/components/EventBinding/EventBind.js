import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: 'Hello Peter'
    }
  }

  onClick(){
    this.setState({ message: 'Hi, Doctor Oculus' })
  }

  render(){
    return (
      <>
        <div>{this.state.message}</div>
        {/* bind from render */}
        {/* <button onClick={this.onClick.bind(this)}>Click</button>  */}
        <button onClick={()=>this.onClick()}>Click</button>
      </>
    )
  }
}

export default EventBind;