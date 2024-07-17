import React, { useState } from "react";
import "./usestate.css";

const UseState = () => {
  const [num, setNum] = useState(2);

  function increment(n) {
    setNum(num + n);
  }

  function decrement(n) {
    if (num <= 0) {
    //  alert("Can not decrement now!");
      return;
    }
    setNum(num - n);
  }

  return (
    <>
      <div className="main">
        <span>UseState</span>
        <h1 className="useStateHeading">{num}</h1>
        <div className="buttons">
          <button className="useStateBtn" onClick={() =>increment(2)}>
            Increment
          </button>
          <button className="useStateBtn" onClick={() =>decrement(1)}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default UseState;
