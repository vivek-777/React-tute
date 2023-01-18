import React, { useState } from 'react';
import Parent from './Parent';
import Children from './Children';

const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);

  console.log("Grand Parent Re-Render");
  return (
    <div>
      <button onClick={() => setNewCount((c)=>c+1)}>count - {newCount}</button>
      <Parent>
        <Children />
      </Parent>
    </div>
  )
}

export default GrandParent;