import { Button, Stack } from "@mui/material";
import React, { useReducer } from "react";

const logUseReducer = "UseReducer Component";

const reducer = (state, action) => {
  console.log(logUseReducer + ", action " + action.type + ", state " + state);

  switch (action.type) {
    case '+':
      return state + 2;
      break;
    case '-':
      return state - 2;
      break;
    case '*':
      return state * 2;
      break;
    case '/':
     return state / 2;
      break;
    default:
      break;
  }

  return ;
};

const UseReducer = () => {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>UseReducer {state} </h1>
      <Stack spacing={4} direction={"row"} padding={"10px"} margin={"10px"}>
        <Button variant="contained" onClick={() => dispatch({type:"+"})}>
          Add{" "}
        </Button>
        <Button variant="contained" onClick={() => dispatch({type:"/"})}>
          Divide{" "}
        </Button>
        <Button variant="contained" onClick={() => dispatch({type:"*"})}>
          Multiply{" "}
        </Button>
        <Button variant="contained" onClick={() => dispatch({type:"-"})}>
          Substract{" "}
        </Button>
      </Stack>
    </>
  );
};

export default UseReducer;
