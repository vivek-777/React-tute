import React, { useContext } from 'react'
import { UserContext } from './userContext';

function ComponentC() {
  const user = useContext(UserContext)
  
  return (
      <div>Hello {user}</div>
  );
}

export default ComponentC
