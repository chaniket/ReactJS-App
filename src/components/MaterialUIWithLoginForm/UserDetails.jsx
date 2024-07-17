import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import MaterialUIWithLoginForm from "./MaterialUIWithLoginForm";

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

function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function callMethod(count) {
  debugger;
  alert("hi " + count);
  alert(MaterialUIWithLoginForm.userData);
  MaterialUIWithLoginForm.removeItem(count);
}

const UserDetails = (props) => {
  return (
    <>
      <div style={{ fontSize: "300%" }}>UserDetails</div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">User Name</StyledTableCell>
              <StyledTableCell align="right">Password</StyledTableCell>
              <StyledTableCell align="right">Remove</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.userObj.map((row) => (
              <StyledTableRow key={row.count}>
                <StyledTableCell component="th" scope="row">
                  {row.firstName}
                </StyledTableCell>

                <StyledTableCell component="th" scope="row">
                  {row.lastName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.username}</StyledTableCell>
                <StyledTableCell align="right">{row.password}</StyledTableCell>
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
    </>
  );
};

export default UserDetails;
