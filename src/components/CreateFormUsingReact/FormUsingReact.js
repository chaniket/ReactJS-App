import { FormatAlignJustify } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-router-dom";

const FormUsingReact = () => {
  const [userForm, setUserForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    console.log(userForm.firstName);
    console.log(userForm.middleName);
    console.log(userForm.lastName);
    console.log(userForm.email);
  };

  return (
    <>
      <div>
        <Box>
          <Form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              id="firstName"
              label="Enter First Name"
              onChange={(e) => setUserForm({ firstName: e.target.value })}
            />
            <TextField
              name="middleName"
              id="middleName"
              label="Enter Middle Name"
              onChange={(e) => setUserForm({ middleName: e.target.value })}
            />
            <TextField
              name="lastName"
              id="lastName"
              label="Enter Last Name"
              onChange={(e) => setUserForm({ lastName: e.target.value })}
            />
            <TextField
              name="email"
              id="email"
              label="Enter Email"
              onChange={(e) => setUserForm({ email: e.target.value })}
            />

            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          </Form>
        </Box>
      </div>
    </>
  );
};

export default FormUsingReact;
