import React, { useContext } from "react";
import {
  TableRow,
  styled,
  TableCell,
  tableCellClasses,
  Button,
  TableBody,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, NavLink } from "react-router-dom";
import SetFormDetails from "../SetFormDetails/SetFormDetails";
import { UserRowContext,UserListContext } from "./UseEffectWithApiCall";
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


const PersonData = ({ element, index, data, setData }) => {
  const logPersonData = "PersonData ";
  /* let element = props.element;
  let data = props.data;
  let setData = props.setData; */
  const user = useContext(UserRowContext);
  const userList = useContext(UserListContext);
  const userDataStorage = useSelector((state) => state.userDataStorage);
  console.log("userDataStorage from storage "+userDataStorage);
  const dispatch = useDispatch();
  
  debugger;
  if(user !=null && user != undefined && (data == null || data==undefined)){ // this records are coming using the Context from UseEffectWithApiCall
    console.log(logPersonData+" "+JSON.stringify(user.element));
    element = user.element;
    index = user.index;
    data = userList;
    setData = user.setData;
  }

  if(data ==null || data == undefined){
    return; 
  }
  function removeItem() {
    debugger;
    let arr = data;
    debugger;
    arr.splice(index, 1);
    setData([...arr]);
    if (arr.length === 0) {
      setData([]);
    }
    dispatch(UserDataStorage(arr));
  }
  //<SetFormDetails element = {element}/>
  return (
    <TableBody key={element.id}>
      <TableRow>
        <StyledTableCell>
          <Link to={`/${element.id}`}>{element.id}</Link>
          &nbsp;{/*index*/}
        </StyledTableCell>
        <StyledTableCell>
          <NavLink to={`/users/${element.id}?status=${element.status}`} >
            {element.firstName}
          </NavLink>
        </StyledTableCell>
        <StyledTableCell>{element.lastName} </StyledTableCell>
        <StyledTableCell>{element.email}</StyledTableCell>
        <StyledTableCell>{element.mobileNumber}</StyledTableCell>
        <StyledTableCell>{element.dob}</StyledTableCell>
        <StyledTableCell>{element.age}</StyledTableCell>
        <StyledTableCell>{element.deptId?.name ?? 'N/A'}</StyledTableCell>
        <StyledTableCell>{element.roleId?.name ?? 'N/A'}</StyledTableCell>
        <StyledTableCell>
          {element.address?.map((addr) => (
            <div key={addr.id}>
              <div style={{ display: "none" }}>{addr.address}</div>
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
    </TableBody>
  );
};

export default PersonData;
