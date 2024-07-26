import React, { useCallback, useState } from "react";
import Todos from "./Todos";
import { Button } from "@mui/material";

const UseCallBackHookSolution = () => {
  /* when the count is incremening then Todos component also getting re-rendered 
  , so that should not happen , bcoz count is not related to Todos */
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback((num) => {
    setTodos((t) => [...t, `New Todo ${num}`]);
  }, []); //we can keep or remove the dependency ex. todos

  /*
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  */

  return (
    <>
      <div>UseCallBackHook Solution</div>

      <div>
        <h1>Count : {count}</h1>
        <Button onClick={increment} color="success" variant="contained">
          Click Me!
        </Button>
      </div>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );
};

export default UseCallBackHookSolution;
