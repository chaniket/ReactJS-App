import React, { useMemo, useState } from "react";
//import userInitialState from "../UseContext/userInitialState.json";
//import useFetch from "../CustomHook/useFetch";
import { Button } from "@mui/material";

const UseMemoHook = () => {
  const logUseMemoHook = "UseMemoHook Component ";
  //const url ="http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=100";
  const [data, setData] = useState([]); //useFetch(url);

  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  const expensiveCalculation = (num) => {
    console.log(logUseMemoHook+"expensiveCalculation ");
    for (let i = 0; i < 1000000; i++) {}

    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <>
      <div>Use Memo Hook</div>

      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Click Me!
      </Button>
      <h1>Count : {count}</h1>
      <input onChange={(e) => setName(e.target.value)}></input>
      <h1>Name : {name}</h1>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.firstName}</h2>
          </div>
        );
      })}
    </>
  );
};

export default UseMemoHook;
