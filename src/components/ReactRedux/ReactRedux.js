import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inc, Dec } from "./Reducers/index";

const ReactRedux = () => {
  const [inputNumber, setInputNumber] = useState(5);
  const currentState = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <h1>React Redux</h1>
        <TextField
          type="number"
          id="inputNumber"
          name="inputNumber"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />

        <h1>{currentState}</h1>
        <Button
          color="success"
          variant="contained"
          onClick={() => dispatch(Inc(inputNumber))}
        >
          Increment
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={() => dispatch(Dec(inputNumber))}
        >
          Decrement
        </Button>
      </div>
    </>
  );
};

export default ReactRedux;
