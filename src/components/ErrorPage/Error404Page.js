import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <>
    <br/><br/>
      <h1 color="error" style={{color:"red"}}>404 Page not found!</h1>
      <br/><br/>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Go Back!
      </Button>
    </>
  );
};

export default Error404Page;
