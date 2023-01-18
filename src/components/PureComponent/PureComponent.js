import React, { PureComponent } from "react";
// import { Link } from 'react-router-dom';

class PureComp extends PureComponent{
  render(){
    console.log('PURE-----------------');
    return(
      <div>
        <h3>
          <a href="https://reactjs.org/docs/react-api.html#reactpurecomponent">Pure Component</a> {this.props.name}
        </h3>
         <img src="../../../assets/images/PureComponent1.png" alt="Pure Component" height={200} width={200}/>
      </div>
    )
  }
}

export default PureComp;