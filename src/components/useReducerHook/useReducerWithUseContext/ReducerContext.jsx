import React, { useReducer, createContext } from 'react';
import CounterA from './ComponentA';
import CounterB from './ComponentB';
import CounterC from './ComponentC';

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return state + action.value
    case 'decrement':
      return state - action.value
    case 'reset':
      return initialState
    default:

  }
}

const ReducerContext = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
      <CountContext.Provider value={{ count, dispatch }}>
        <div>
          <div>{count}</div>
            <CounterA />
            <CounterB />
            <CounterC />
        </div>
      </CountContext.Provider>
  )
}

export default ReducerContext;