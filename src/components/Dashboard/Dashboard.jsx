import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Error404Page from "../ErrorPage/Error404Page";
import { Header } from "../../Header/Header";
import ContactDetails from "../AboutPage/ContactDetails";
import AboutMe from "../AboutPage/AboutMe";
import AboutComapany from "../AboutPage/AboutCompany";
import About from "../AboutPage/About";
import UseEffectWithApiCall from "../UseEffectWithApiCall/UseEffectWithApiCall";
import SetFormDetails from "../SetFormDetails/SetFormDetails";
import UseContextWithApi from "../UseContext/UseContextWithApi";

const Dashboard = () => {
  return (
    <>
      <Router>
        <Header />

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route index element={<AboutMe />}></Route>
              <Route path="aboutMe" element={<AboutMe />}></Route>
              <Route path="aboutCompany" element={<AboutComapany />}></Route>
            </Route>
            <Route path="/users" element={<Users />}>
              
            </Route>
            <Route path="/users/:id" element={<UseContextWithApi />}></Route>

            {/*use Route inside the UseContextWithApi and below the table add <Outlet/>
  <Route path="/users" element={<Users />} >
            <Route path="/users/:id" element={ <UseContextWithApi /> }></Route>
            </Route>
            */}

            <Route path="*" element={<Error404Page />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

function Home() {
  console.log("Home");
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

function Users() {
  console.log("Users");
  return (
    <>
      <UseEffectWithApiCall usersStatus = "Active"/>
      <br />
      <br />
      <h2>Users Header</h2>
    </>
  );
}

export default Dashboard;
