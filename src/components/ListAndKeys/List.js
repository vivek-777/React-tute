import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      item : ['a','b','c','d']
    }
  }
  

  onDelete = () => {
    const updatedList = [...this.state.item]
    updatedList.splice(1,1);
    this.setState({item: updatedList});
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.item.map((i,index)=>{
            return <li key={`${i}_${index}`}><b>{index}&nbsp;</b>{i}</li> 
          })}
        </ul>
        <button onClick={this.onDelete}>delete</button>
      </div>
    )
  }
}

export default List
