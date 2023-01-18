import React,{ Component } from "react";
import image1 from './1.png'; 
import image2 from './2.png'; 
import image3 from './3.png'; 
import image4 from './4.png'; 
import image5 from './5.png';
import image6 from './6.png';
import image7 from './7.png';
import image8 from './8.png';
import image9 from './9.png';
import image10 from './10.png';
import image11 from './11.png';

class LifeCycleB extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    // console.log("LifeCycleB constructor(props)")
  }

  static getDerivedStateFromProps(){
    // console.log("LifeCycleB getDerivedStateFromProps()");
  }

  getSnapshotBeforeUpdate(){
    console.log("LifeCycleB getSnapshotBeforeUpdate()");
    return null
  }

  shouldComponentUpdate(){
    console.log("LifeCycleB shouldComponentUpdate()");
    return true
  }

  componentDidUpdate(){
    console.log("LifeCycleB componentDidUpdate()");
  }

  componentDidMount(){
    // console.log("LifeCycleB componentDidMount()")
  }

  render(){
    console.log("LifeCycleB render()")
    return (
      <>
        <div>LifeCycle B </div>
        <img src={image1} alt='lifecycle' width={600}/>
        <img src={image2} alt='lifecycle' width={600}/>
        <img src={image3} alt='lifecycle' width={600}/>
        <img src={image4} alt='lifecycle' width={600}/>
        <img src={image5} alt='lifecycle' width={600}/>
        <img src={image6} alt='lifecycle' width={600}/>
        <img src={image7} alt='lifecycle' width={600}/>
        <img src={image8} alt='lifecycle' width={600}/>
        <img src={image9} alt='lifecycle' width={600}/>
        <img src={image10} alt='lifecycle' width={600}/>
        <img src={image11} alt='lifecycle' width={600}/>
      </>
    );
  }

}

export default LifeCycleB;