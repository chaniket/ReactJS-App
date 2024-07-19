import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const UsersRoute = () => {
  return (
    <>
      <div>UsersRoute</div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
};

function Users() {
  /* All <Route path> and <Link to> values in this
       component will automatically be "mounted" at the
       /users URL prefix since the <Users> element is only
       ever rendered when the URL matches /users/*
    */
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UsersIndex />} />
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}

function Home() {
  console.log("Home");
  return <h2>Home Header</h2>;
}

function UsersIndex() {
  console.log("UsersIndex");
  return <h2>UsersIndex</h2>;
}

function UserProfile() {
  console.log("UserProfile");
  return <h2>UserProfile</h2>;
}

function OwnUserProfile() {
  console.log("OwnUserProfile");
  return <h2>OwnUserProfile</h2>;
}

export default UsersRoute;
