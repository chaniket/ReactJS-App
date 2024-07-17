import React, { useState } from "react";
import "./MaterialUIWithLoginForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import UserDetails from "./UserDetails";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MaterialUIWithLoginForm = () => {
  const [username, setUserName] = useState("aniketchavan7507@gmail.com");
  const [password, setPassword] = useState("Aniket");
  const [firstName, setFirstName] = useState("Aniket");
  const [lastName, setLastName] = useState("Chavan");
  let [count, setCount] = useState(0);
  let [userData, setData] = useState([]);

  const addData = () => {
    debugger;
    count = count + 1;
    setCount(count);
    setData([...userData, { username, password, firstName, lastName, count }]);
    //console.log("userData " + JSON.stringify(userData));
  };

  function callMethod(index) {
    debugger;
    //alert("hi "+count);
    //userData.splice(index,1);
    userData = userData.filter((ele) => ele.count != index);
    setData(userData);
    userData
      .filter((ele) => ele.count != index)
      .forEach((ele) => console.log(ele));
  }
  function removeItem(index) {
    // alert("hi "+index);
  }

  function onChangeUserName(username) {
    console.log(username);
    setUserName(username);
  }

  function onChangePassword(password) {
    console.log(password);
    setPassword(password);
  }

  return (
    <>
      <div className="materialUi">
        <h1>MaterialUI With Login Form</h1>
      </div>
      <br />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            style={{ fontSize: "20px" }}
          />

          <TextField
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />

          <TextField
            value={username}
            onChange={(event) => onChangeUserName(event.target.value)}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={(event) => onChangePassword(event.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />

          <Button variant="contained" color="error" onClick={() => addData()}>
            <AddIcon />
          </Button>
        </Stack>

        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>First Name</StyledTableCell>
                <StyledTableCell align="right">Last Name</StyledTableCell>
                <StyledTableCell align="right">User Name</StyledTableCell>
                <StyledTableCell align="right">Password</StyledTableCell>
                <StyledTableCell align="right">Remove</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((row) => (
                <StyledTableRow key={row.count}>
                  <StyledTableCell align="right">{row.count}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.firstName}
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    {row.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.password}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      color="info"
                      onClick={(element) => callMethod(row.count)}
                    >
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default MaterialUIWithLoginForm;
