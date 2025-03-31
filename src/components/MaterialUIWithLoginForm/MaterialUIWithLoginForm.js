import React, { useState } from "react";
import "./MaterialUIWithLoginForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import UserDetails from "./UserDetails";
import { v4 as uuid } from "uuid";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserDataStorage } from "../ReactRDXStorage/UserDataStorageFile";

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

const MaterialUIWithLoginForm = ({ onDataSubmit, setData, data }) => {
  //window.alert("In Material "+JSON.stringify(data));
  const userDataStorage = useSelector((state) => state.userDataStorage);
  // console.log("userDataStorage from storage "+userDataStorage);
  const dispatch = useDispatch();
  //console.log("In Material "+JSON.stringify(data));
  const [username, setUserName] = useState("aniketchavan7507@gmail.com");
  const [password, setPassword] = useState("Aniket");
  const [firstName, setFirstName] = useState("Aniket");
  const [lastName, setLastName] = useState("Chavan");
  const [mobileNumber, setMobileNumber] = useState("9503764321");
  const [age, setAge] = useState("29");
  let [count, setCount] = useState(data.length);
  let [userData, setUserData] = useState(data);
  
  

  const addData = () => {
    debugger;
    const uid = uuid();
    count = count + 1;
    setCount(count);
    let id = count;
    let status = "Active";
    let dob ="1996-03-13";
    setUserData([...userData, { mobileNumber, age, firstName, lastName, count, id ,status,dob}]);
    if (typeof onDataSubmit === 'function') {
     // onDataSubmit({ mobileNumber, age, firstName, lastName, count, id,status,dob });
    } else {
      console.error('onDataSubmit is not a function');
    }
    let arr = data;
    setData([...arr, { mobileNumber, age, firstName, lastName, count, id,status,dob }]);
    dispatch(UserDataStorage(userData));
  };

  function deleteRowById(index) {
    debugger;
    //alert("hi "+count);
    //userData.splice(index,1);
    userData = userData.filter((ele) => ele.count != index);
    setUserData(userData);
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
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
            id="outlined-basic"
            label="Mobile No"
            variant="outlined"
          />
          <TextField
            value={age}
            onChange={(event) => setAge(event.target.value)}
            id="outlined-basic"
            label="Age"
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
                <StyledTableCell align="right">Mobile No</StyledTableCell>
                <StyledTableCell align="right">Age</StyledTableCell>
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
                    {row.mobileNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.age}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      color="info"
                      onClick={(element) => deleteRowById(row.count)}
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
