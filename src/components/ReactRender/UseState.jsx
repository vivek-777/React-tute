import React, { useState } from 'react';

const UseState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter((c)=>c+1)}>count - {counter}</button>
      <button onClick={() => setCounter(0)}>count - 0</button>
      <button onClick={() => setCounter(5)}>count - 5</button>
    </div>
  )
}

export default UseState;