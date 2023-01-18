import React, {useState, useMemo} from 'react';

function Counter() {
  const [counterOne, setCounterOne]=useState(0);
  const [counterTwo, setCounterTwo]=useState(0);
  
  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo+1)
  }
  
  const isEven = useMemo(() =>{
    let i = 0;
    while(i < 2000000000) i++;
    return counterOne % 2 === 0 ? ' Even': ' Odd'
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={incrementCounterOne} >CountOne {counterOne}</button>
        <span>{isEven}</span>
      </div>
      <div>
        <button onClick={incrementCounterTwo} >CountTwo {counterTwo}</button>
      </div>
    </>
  );
}

export default Counter;
