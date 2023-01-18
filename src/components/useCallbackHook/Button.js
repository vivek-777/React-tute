import React from 'react';

function Button({changeValue, children}) {
  console.log("Render Button", children);
  return <button onClick={changeValue}>{children}</button>;
}

export default React.memo(Button);
