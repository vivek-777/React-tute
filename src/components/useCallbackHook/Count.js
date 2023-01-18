import React from 'react';

function Count({text, value}) {
  console.log("Render ", text);
  return <div>{text}-{value}</div>;
}

export default React.memo(Count);
