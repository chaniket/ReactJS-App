import React from "react";
import InstaContact from "./AboutMe";
import MailContact from "./AboutCompany";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import ContactDetails from "./ContactDetails";

const About = () => {
  console.log("About Components...");
  return (
    <>
      <ContactDetails />
      {/* <Routes>
          <Route path="about/insta" element={<InstaContact />}></Route>
          <Route path="about/mail" element={<MailContact />}></Route>
        </Routes>*/}

      <Outlet />
    </>
  );
};

export default About;
