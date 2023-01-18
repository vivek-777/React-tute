import React, { useContext } from 'react';
import { CountContext } from './ReducerContext';

const CounterC = () => {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>CounterC - {count}
      <button onClick={() => dispatch({ type: 'increment', value: 3 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 3 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  )
};

export default CounterC;