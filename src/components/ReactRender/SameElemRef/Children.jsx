import React, { useState } from 'react';

const Children = () => {
  const [counter, setCounter] = useState(0);
  console.log("Children Re-Render");
  return (
    <div>
      <button onClick={() => setCounter((c)=>c+1)}>count - {counter}</button>
    </div>
  )
}

export default Children;