import React, { useReducer } from 'react';

const initialState = {
  firstCounter : 0,
  secondCounter : 0
}
const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'incrementTwo':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrementTwo':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter {count.firstCounter}</div>
      <div>Second Counter {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'increment', value: 2 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', value: 2 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: 'incrementTwo', value: 5 })}>IncrementTwo</button>
        <button onClick={() => dispatch({ type: 'decrementTwo', value: 5 })}>DecrementTwo</button>
        <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
      </div>
    </div>
  )
};

export default CounterTwo;