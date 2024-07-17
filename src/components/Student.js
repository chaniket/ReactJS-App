import React from "react";
import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <>
      {props.userObj}
      <h1>Student Name {props.name}</h1>
      <h1>Age {props.age}</h1>
    </>
  );
};

Student.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
};

Student.defaultProps = {
  name: "Aniket",
  age: 28,
}