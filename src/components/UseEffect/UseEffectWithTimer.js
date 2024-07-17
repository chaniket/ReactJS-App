import React, { useEffect, useState } from "react";

const UseEffectWithTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("USE Effect called...");
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    // return () => clearTimeout(timer)
  }, []); //,[]//,[count]

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      
      <h1>I've rendered {count} times!</h1>
    </>
  );
};

export default UseEffectWithTimer;
