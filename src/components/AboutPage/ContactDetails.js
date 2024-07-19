import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ContactDetails = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "blue",
    };
  };

  return (
    <>
      <header className="header" style={{paddingTop:"10px"}}>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item" style={{backgroundColor:"black",borderRadius:"10px"}}>
              <NavLink to={"aboutMe"} className="nav-link">
                {/*  style={navLinkStyle} */}
                About Me!
              </NavLink>
            </li>
            <li className="nav-item" style={{backgroundColor:"black",borderRadius:"10px"}}>
              <NavLink to={"aboutCompany"} className="nav-link">
                About Company!
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default ContactDetails;
