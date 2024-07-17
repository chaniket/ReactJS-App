import React, { useState, useEffect } from "react";
import "./useeffect.css";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const UseEffect = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {

    async function getAllUser(){
      const data = await fetch("http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=10");
      console.log(JSON.stringify(data));
    }
    getAllUser();
    //window.alert("UseEffect Called...");
    console.log("UseEffect Called...");
  }, [state]);

  // window.alert("Function Body Called...");
  console.log("Function Body Called...");

  return (
    <>
      <div>UseEffect Hook </div>
      <div className="buttonsDiv" style={{textAlign:"right",marginLeft:"30%"}}>
        <Stack spacing={3} direction="row">
          {console.log("Inside JSX")}
          <Button
            variant="contained"
            color="success"
            onClick={() => setState(state + 1)}
          >
            {" "}
            Click Me! {state}
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => setState2(state2 + 1)}
          >
            Click Me! {state2}
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default UseEffect;
