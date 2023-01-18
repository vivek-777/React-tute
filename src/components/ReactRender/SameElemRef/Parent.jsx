import React, { useState } from 'react';

const Parent = ({children}) => {
  const [counter, setCounter] = useState(0);

  console.log("Parent Re-Render");
  return (
    <div>
      <button onClick={() => setCounter((c)=>c+1)}>count - {counter}</button>
      {children}
    </div>
  )
}

export default Parent;