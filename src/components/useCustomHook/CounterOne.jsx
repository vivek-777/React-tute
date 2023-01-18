import React from 'react';
import useCount from '../hooks/useCount';

const CounterOne = () => {
  const [ count, increment, decrement, reset ] = useCount(0, 3);

  return (
    <div>
      {count}
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )

};

export default CounterOne;