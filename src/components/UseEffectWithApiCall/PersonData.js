import React from "react";
import {
  TableRow,
  styled,
  TableCell,
  tableCellClasses,
  Button,
} from "@mui/material";
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

const PersonData = ({ element, index, data, setData }) => {
  /* let element = props.element;
  let data = props.data;
  let setData = props.setData; */
  function removeItem() {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <TableRow key={element.id}>
      <StyledTableCell>{element.id} &nbsp;{index}</StyledTableCell>
      <StyledTableCell>{element.firstName}</StyledTableCell>
      <StyledTableCell>{element.lastName}</StyledTableCell>
      <StyledTableCell>{element.email}</StyledTableCell>
      <StyledTableCell>{element.mobileNumber}</StyledTableCell>
      <StyledTableCell>{element.dob}</StyledTableCell>
      <StyledTableCell>{element.age}</StyledTableCell>
      <StyledTableCell>{element.deptId.name}</StyledTableCell>
      <StyledTableCell>{element.roleId.name}</StyledTableCell>
      <StyledTableCell>
        {element.address.map((addr) => (
          <div key={addr.id}>
            <div>{addr.address}</div>
            <div>
              {addr.street}, {addr.pincode}
            </div>
          </div>
        ))}
      </StyledTableCell>
      <StyledTableCell>
        <Button variant="contained" color="success" onClick={removeItem}>
          <DeleteIcon />
        </Button>
      </StyledTableCell>
    </TableRow>
  );
};

export default PersonData;
