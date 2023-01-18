import React, { useState, useCallback } from 'react';
import useCallBack from './useCallback.png';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge=useCallback(()=>{
    setAge(age + 1);
  }, [age]);

  const incrementSalary=useCallback(()=>{
    setSalary(salary + 1000);
  },[salary]);

  return (
    <>
      <Title />
      <Count text={'Age'} value={age} />
      <Button changeValue = {incrementAge}>Increment Age</Button>
      <Count text={'Salary'} value={salary} />
      <Button changeValue = {incrementSalary}>Increment Salary</Button>
      <img src={useCallBack} alt='useCallback'/>
    </>
  );
}

export default ParentComponent;
