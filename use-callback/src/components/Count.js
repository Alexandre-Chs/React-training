import React from "react";

function Count({ text, count, bgColor }) {
  console.log(`Pourcentage ${text}`);
  const progress = { width: `${count}%` };
  return (
    <>
      <p className="h1">{count}%</p>

      <div className="progress">
        <div
          className={`progress-bar progress-bar-stripper bg-${bgColor}`}
          role="progressbar"
          style={progress}
        ></div>
      </div>
    </>
  );
}

export default React.memo(Count);
