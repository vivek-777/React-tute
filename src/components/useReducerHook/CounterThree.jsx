import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter {count}</div>
      <div>
        <button onClick={() => dispatch({ type: 'increment', value: 2 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 2 })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
      </div>
      <div>Second Counter {countTwo}</div>
      <div>
        <button onClick={() => dispatchTwo({ type: 'increment', value: 5 })}>IncrementTwo</button>
        <button onClick={() => dispatchTwo({ type: 'decrement', value: 5 })}>DecrementTwo</button>
        <button onClick={() => dispatchTwo({ type: 'reset'})}>Reset</button>
      </div>
    </div>
  )
};

export default CounterThree;