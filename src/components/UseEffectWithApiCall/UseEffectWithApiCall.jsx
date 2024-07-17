import React, { useState, useEffect } from "react";
import "./useeffect.css";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,styled,tableCellClasses
} from "@mui/material";
import PersonData from './PersonData'

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

let sampleData = {
  id: 1,
  firstName: "Sharada",
  lastName: "Chavan",
  email: "sharadachavan@gmail.com",
  mobileNumber: "9503764321",
  dob: "1996-05-13",
  age: 28,
  deptId: {
    id: 1,
    name: "Information Tech",
  },
  roleId: {
    id: 1,
    name: "Java Developer",
  },
  address: [
    {
      id: 1,
      address: "Pune",
      pincode: "411027",
      street: "Old Sangvi",
    },
  ],
};

const UseEffectWithApiCall = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([sampleData,sampleData,sampleData]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=100",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        console.log("Data " + data.content);
        setData(data.content);
        sampleData = data.content;
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
      });
      
      async function getAllUser() {
        console.log("State  "+state);
        const data = await fetch(
          "http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=100"
        );
        const res = await data.json();
        if(res.ok){
          console.log("GET ALL USERS "+res.content);
          setState(res.content.length);
          document.title = res.content.length+' Users';
        }
      }
      getAllUser();
    // window.alert("UseEffect Called...");
    console.log("UseEffect Called...");
  }, [state]);

  // window.alert("Function Body Called...");
  console.log("Function Body Called...");

  const clickMe = () => {
    //window.alert("Click Me const executed!");
    console.log("Click Me const executed!");
  };

  return (
    <>
      <div>UseEffect Hook </div>
      <div
        className="buttonsDiv"
        style={{ textAlign: "justify", marginLeft: "5%" }}
      >
        <Stack spacing={2} direction="row">
          {console.log("Inside JSX")}
          <Button
            variant="contained"
            color="success"
            onClick={() => setState(state + 1)}
          >
            Click Me! {state}
          </Button>
        </Stack>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>First Name</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Mobile Number</StyledTableCell>
                <StyledTableCell>Date of Birth</StyledTableCell>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length !== 0 ? (
                data.map((element, index) => {
                  return (
                      <PersonData key={index} index = {index} element = {element}
                       data= {data} setData={setData} />
                  );
                })
              ) : (
                <h1>No Data</h1>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default UseEffectWithApiCall;
