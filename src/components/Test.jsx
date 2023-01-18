import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

// class Test extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       message: "Hi"
//     }
//   }

//   render(){
//     return (
//       <div>
//         TEST - {this.state.message}
//       </div>
//     )
//   }
// } 

// export default Test;


/////////////////////////////////////////////////////////////////////////////

class SampleComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState((prevState) => { 
      return { count: prevState.count + 1 }
    });
  }

  render() {
    console.log(">>>>>>>>>>>>>parent>>>>>>>>>>>>>>>>>>>>")
    return (
      <>
        <button onClick={this.handleClick}>Click {this.state.count}</button>
        <ChildComponent message={"Hi"}/>
      </>
    );
  }
}

export default SampleComponent;


////////////////////////////////////////////////////////////////////////////

//CHESS BOARD



// import React from "react";

// const getRow = (y) => {
//   let tableRow = [];
//   for(let x=0; x<8; ++x){
//     let z = (x%2 === 0) ? ( y ? 'white' : 'black'): ( y ? 'black' : 'white')
//     tableRow.push(
//       <td key={x} style={{ padding: '24px', background: z }}></td>
//     )
//   }
//   return tableRow;
// }

// const getTable=()=>{
//   let tableColumn = [];
//   for(let x=0; x<8; ++x){
//     let y = x%2 === 0 ? true : false;
//     tableColumn.push(
//       <tr key={x}>{getRow(y)}</tr>
//     )
//   }
//   return tableColumn;
// }

// function App() {
//   return (
//     <>
//       <table style={{background: 'white', border: '1px solid black', }}>
//         <tbody>
//           {getTable()}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default App;

