import React, { useState, useEffect, useRef, createContext } from "react";
import { Box, Stack } from "@mui/material";
import { TextField, Button } from "@mui/material";
import Portal from "@mui/material";
import { Diversity1Rounded } from "@mui/icons-material";
import userInitialState from "./userInitialState.json";

import { useParams,useNavigate,useSearchParams } from "react-router-dom";

const UserContext = createContext();

const UseContextWithApi = (props) => {
const constLog = "UseContextWithApi ";
  const navigate = useNavigate();

  setTimeout(() => {
    navigate(-1);
  }, 3000);

  let { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(constLog+" searchParams - "+searchParams.get('status'));
  console.log(constLog+
    "UseContextWithApi ID = " + id + ", props = " + JSON.stringify(props)
  );
  let initialState = userInitialState[0];
  debugger;
  if (id != null && id != undefined) {
    initialState = userInitialState.filter((ele) => ele.id == id)[0];
  }

  const [formData, setFormData] = useState(initialState);
  const portalRef = useRef(null);

  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(constLog+""+JSON.stringify(formData));
  };

  const handleNestedChange = (e, key) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [key]: { ...formData[key], [name]: value } });
  };

  const handleAddressChange = (e, index) => {
    const { name, value } = e.target;
    const newAddresses = formData.address.map((address, i) =>
      i === index ? { ...address, [name]: value } : address
    );
    setFormData({
      ...formData,
      address: newAddresses,
    });
  };

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    //event.target.elements.age
    alert("The name you entered was: " + event.target.firstName.value);
  };

  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    bgcolor="#f0f0f0"
    p={2}
      >
      <form onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          variant="outlined"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="lastName"
          label="Last Name"
          id="lastName"
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
        />

        <TextField
          type="email"
          name="email"
          label="Email"
          id="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="mobileNumber"
          variant="outlined"
          label="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />

        <TextField
          type="date"
          name="dob"
          id="dob"
          variant="outlined"
          label="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
        />

        <TextField
          type="number"
          id="age"
          name="age"
          label="age"
          variant="outlined"
          value={formData.age}
          onChange={handleChange}
        />

        <TextField
          type="text"
          id="department"
          name="departent"
          label="Department"
          variant="outlined"
          value={formData.deptId.name}
          onChange={(e) => handleNestedChange(e, "deptId")}
        />

        <TextField
          type="text"
          label="Role"
          name="name"
          variant="outlined"
          id="role"
          value={formData.roleId.name}
          onChange={(e) => handleNestedChange(e, "roleId")}
        />

        {formData.address.map((addr, index) => (
          <div key={addr.id}>
            <h3>Address {index + 1}</h3>

            <TextField
              type="text"
              label="Street"
              name="street"
              variant="outlined"
              id="street"
              value={addr.street}
              onChange={(e) => handleAddressChange(e, index)}
            />

            <TextField
              type="text"
              label="Address"
              name="address"
              variant="outlined"
              id="address"
              value={addr.address}
              onChange={(e) => handleAddressChange(e, index)}
            />

            <TextField
              type="text"
              label="Pin Code"
              name="pincode"
              variant="outlined"
              id="pincode"
              value={addr.pincode}
              onChange={(e) => handleAddressChange(e, index)}
            />
          </div>
        ))}

        <Button
          variant="contained"
          color="success"
          type="submit"
          draggable
          onDrag={() => console.log(constLog+""+"Button Dragged..")}
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="success"
          type="button"
          draggable
          onClick={()=>navigate(-1)}
        >
          Go back
        </Button>
      </form>
    </Box>
  );
};

export default UseContextWithApi;
