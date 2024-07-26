import React, { useEffect, useState } from "react";
import userInitialState from "../UseContext/userInitialState.json";
import useFetch from "./useFetch";
import { Button } from "@mui/material";
const CustomHook = () => {
  const logCustomHook = "CustomHook Component ";
  const url =
    "http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=100";
  const [data, setData] = useState([]);//useFetch(url);

  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  return (
    <>
      <div>CustomHook</div>

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

export default CustomHook;
