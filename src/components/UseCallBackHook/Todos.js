import { Button } from "@mui/material";
import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  const log = "Todos";
  console.log(log + " child render");
  return (
    <>
      <div>Todos</div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <p key={index}>{todo}</p>
          </div>
        );
      })}

      <Button
        variant="contained"
        style={{ position: "absolute" }}
        onClick={() => addTodo("! new Task send")}
        color="error"
      >
        Add Todo
      </Button>
    </>
  );
};

export default memo(Todos);
