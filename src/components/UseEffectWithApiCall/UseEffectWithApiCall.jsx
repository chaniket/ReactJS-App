import React, { useState, useEffect, createContext } from "react";
import "./useeffect.css";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
//import axios from "axios";
//import userInitialState from '../userInitialState.json'
import userInitialState from "../UseContext/userInitialState.json";
import cloneDeep from "lodash.clonedeep";
import { BrowserRouter as Router } from "react-router-dom";
//import { useSearchParams, useParams } from "react-router-dom";
//Use context will not work directly, as we need to use Routing
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  tableCellClasses,
} from "@mui/material";
import PersonData from "./PersonData";
import { TailSpin } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { Outlet } from "react-router-dom";
//import { TailSpin } from "react-loader-spinner";

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

//const tempuserInitialState =  structuredClone(userInitialState);
const tempuserInitialState = cloneDeep(userInitialState);

const UserRowContext = createContext();
const UserListContext = createContext();

const UseEffectWithApiCall = (props) => {
  //debugger;
  const constLog = "UseEffectWithApiCall Component ";
  const [userStatus, setUserStatus] = useState(
    props.usersStatus == undefined ? "All" : props.usersStatus
  );
  const [state, setState] = useState(1);
  let [data, setData] = useState(userInitialState);
  const [loadingIcon, setLoadingIcon] = useState(false);
  let count = 0;
  //data.forEach((ele) => console.log("Element " + ele.id));
  /* data = data.map((ele) => {
    ele.id = count;
    count++;
  }); */
  //setData(data);
  //data.forEach((ele) => console.log("Element " + ele.id));
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingIcon(true);
    work();
    //debugger;
    // console.log("Use Effect Data " + JSON.stringify(data));
    //console.log("Use Effect userInitialState " + JSON.stringify(tempuserInitialState));
    setData(tempuserInitialState);
    fetch(
      "http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=100",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        debugger;
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        console.log("Data " + data.content);
        debugger;
        setData(data.content);
        setLoadingIcon(false);
      })
      .catch((error) => {
        //console.error("Error:", error);
        setError(error);
        setLoadingIcon(false);
      });

    setTimeout(function () {
      console.log(constLog + " " + setTimeout);
    }, 2000);

    /*   async function getAllUser() {
      console.log("State  " + state);
      const data = await fetch(
        "http://localhost:8082/saga-user-service/users/getAllUsers?page=0&size=100"
      ).catch((error) => {
        console.error("getAllUser :", error);
        setError(error);
      });
      try {
        const res = await data.json();
        if (data.ok) {
          console.log("GET ALL USERS " + res.content);
          setState(res.content.length);
          document.title = res.content.length + " Users";
        }
      } catch (e) {
        //console.log("Error Handled..." + e);
      }
    }
    getAllUser(); */
    // window.alert("UseEffect Called...");
    // console.log("UseEffect Called...");
  }, [state]);

  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, 10000));

  async function work() {
    console.log("Pausing execution for 1 second");
    await pause(3000);
    console.log("Resuming execution");
  }
  // window.alert("Function Body Called...");
  //console.log("Function Body Called...");

  const clickMe = () => {
    //window.alert("Click Me const executed!");
    console.log("Click Me const executed!");
  };

  const notify = () => {
    toast("Wow so easy!");
    toast.success("Hey this popup looks good!");
    toast.error("Error react JS toast");
    toast.warning("React JS toast warning");

  /*  toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    }); */
  };

  return (
    <>
      <div>UseEffect Hook </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />

      <div>
        <Button onClick={notify} variant="contained" color="success">
          Notify!
        </Button>
        <ToastContainer />
      </div>

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

          <Button
            variant="contained"
            color="success"
            onClick={() => setUserStatus("Active")}
          >
            Active
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => setUserStatus("InActive")}
          >
            InActive
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={() => setUserStatus("All")}
          >
            Reset Filter
          </Button>
        </Stack>
        {loadingIcon ? (
          <>
            <h1>loading</h1>
            <hr />
            <TailSpin
              visible={loadingIcon}
              height="80"
              width="80"
              id="tailSpin"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              textAlign="center"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </>
        ) : (
          <TableContainer component={Paper} key={"tableContainer"}>
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

              {data != null && data.length !== 0 ? (
                data.map((element, index) => {
                  if (element.status === userStatus || userStatus === "All") {
                    /* if(element.id==1){
                    return (<>
                    <UserRowContext.Provider value={element}>
                          <PersonData
                           
                          />
                    </UserRowContext.Provider>
                    </>);
                  } */
                    return (
                      <>
                        <UserRowContext.Provider
                          value={{ index, element, data, setData }}
                        >
                          <UserListContext.Provider value={data}>
                            {/*calling PersonData using UseContext instead of parameter  */}
                            <PersonData />
                          </UserListContext.Provider>
                        </UserRowContext.Provider>
                        <PersonData
                          key={index}
                          index={index}
                          element={element}
                          data={data}
                          setData={setData}
                        />
                      </>
                    );
                  }
                })
              ) : (
                <TableBody key={10}>
                  <TableRow>
                    <TableCell
                      colSpan="11"
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bolder",
                      }}
                    >
                      No Data Available
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};

export default UseEffectWithApiCall;
export { UserRowContext, UserListContext };
