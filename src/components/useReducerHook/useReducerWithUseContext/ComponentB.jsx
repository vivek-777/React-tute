import React, { useContext } from 'react';
import { CountContext } from './ReducerContext';

const CounterB = () => {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>CounterB - {count}
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  )
};

export default CounterB;