import React from 'react'


function FunctionalComponentSecond({handleClick}) {
  return (
    <div>
      {handleClick()}
    </div>
  )
}

function FunctionalComponent() {
  return (
    <div>
      <FunctionalComponentSecond handleClick={()=>{
        return 5;
      }}/>
    </div>
  )
}

export default FunctionalComponent
