import React, { Component } from 'react'
import InputComponent from './InputComponent';

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef();
  }
  
  onClickHandler=()=>{
    this.componentRef.current.focusInput();
  }

  render() {
    return (
      <div>
         <InputComponent ref={this.componentRef}/>
         <button onClick={this.onClickHandler}>Focus Child Input Component</button>
      </div>
    )
  }
}

export default FocusInput
