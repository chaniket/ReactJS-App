import React,{useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";

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



const SetFormDetails = () => {

  const [form,setForm] = useState({});
  let [userData,setData] = useState([]);
  let [count,setCount] = useState(0);
  
  const addData = () => {
    debugger;
    count = count + 1;
    setCount(count);
    form.count = count;
    setData([...userData, form]);
  //  setForm(form);
    console.log("userData " + JSON.stringify(userData));
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

  return (
    <>
      <div>SetFormDetails</div>

      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.firstName}
            onChange={(event) => setForm({...form, firstName:event.target.value})}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            style={{ fontSize: "20px" }}
          />

          <TextField
            value={form.lastName}
            onChange={(event) => setForm({...form, lastName:event.target.value})}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />

          <TextField
            value={form.username}
            onChange={(event) => setForm({...form, username:event.target.value})}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
          />
          <TextField
            value={form.password}
            onChange={(event) => setForm({...form, password:event.target.value})}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />

<TextField type="hidden"
            value={count}
            onChange={(event) => setForm({...form, count:count})}
            id="outlined-basic"
            label="Count"
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

export default SetFormDetails;
