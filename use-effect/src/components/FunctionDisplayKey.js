import React, { useState, useEffect } from "react";

export default function FunctionDisplayKey() {
  const [keyCode, setKeyCode] = useState("");
  const handleKeyCode = (e) => {
    setKeyCode(e.code);
    console.log('event activé')
  };
  useEffect(() => {
    document.addEventListener("keyup", handleKeyCode);

    return () => {
        console.log('retiré event')
        document.removeEventListener("keyup", handleKeyCode);
    }
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="text-center">{keyCode}</h1>
      </div>
    </div>
  );
}
