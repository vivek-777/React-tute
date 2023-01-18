import React from 'react';

class RefsDemo extends React.Component {

  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    console.log("-----------RefDemo----------")
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  render(){
    return(
      <div>
        <input type={'text'} ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo