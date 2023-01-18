import React, { useContext } from 'react';
import { CountContext } from './ReducerContext';

const CounterA = () => {
  const { count, dispatch } = useContext(CountContext);

  return (
    <div>CounterA - {count}
      <button onClick={() => dispatch({ type: 'increment', value: 2 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 2 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  )
};

export default CounterA;