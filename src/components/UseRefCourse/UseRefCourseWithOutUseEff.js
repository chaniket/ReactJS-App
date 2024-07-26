import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const UseRefCourseWithOutUseEff = () => {
  const logUseRefCourse = "UseRefCourse Component ";
  //const [state, setState] = useState(0);
  const state = useRef(0);
  const prevUserNameState = useRef("");
  const [username, setUserName] = useState("");

  const usernameField = useRef();

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const setCounterFun = (count,event) => {
    state.current = count;
    console.log(logUseRefCourse + " " + usernameField.current);
    debugger;
    usernameField.current.focus();
    usernameField.current.style.borderRadius = "20px";
    //event.preventDefault()
  };

  return (
    <>
      <div>
        UseRefCourse
        <h2>{state.current}</h2>
        
        <TextField
          type="text"
          name="username"
          id="username"
          value={username}
          label="Enter Username"
          inputRef={usernameField}
          placeholder="Enter Username"
          autoComplete="off"
          onChange={(event) => userNameHandler(event)}
          style={{ borderRadius: "20px" }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={(event) => setCounterFun(state.current,event)}
        >
          Increse
        </Button>
        <h1>Application has been rendered {state.current} times</h1>
        <h1>Application previous state {prevUserNameState.current}</h1>
        
      </div>
    </>
  );
};

export default UseRefCourseWithOutUseEff;
