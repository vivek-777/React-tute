import React from 'react'

const FRInput=React.forwardRef((props, refs)=>{
  return (
    <div>
      <input ref={refs}/>
    </div>
  )
})

export default FRInput
