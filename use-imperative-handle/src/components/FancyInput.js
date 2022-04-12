import React, { useState } from "react";

const FancyInput = React.forwardRef((props ,ref) => {

  const [count, setCount] = useState(0);

  useImperativeHandle(
    first,
    () => {
      focus: () => {
          
      },
      countMax: () => {
          if(count < 5) {
              setCount(count + 1)
          }
      }
    },
    [third],
  )
  return (
    <div>
      <h1>{count}</h1>
      <input ref={ref} type="text"></input>
    </div>
  );
});

export default FancyInput;
