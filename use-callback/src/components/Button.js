import React from "react";

function Button({btnColor, increment, children,handleClick}) {

    console.log(`Button ${children}`)
  return <button onClick={() => handleClick(increment)} className={`btn btn-${btnColor} mt-3`}>+%</button>;
}


export default React.memo(Button);