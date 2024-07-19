import React from "react";

import {
  BrowserRouter as Router,
  Route,Routes,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

const UrlParameterEx = () => {
  return (
    <>
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="/netflix">Netflix</Link>
            </li>
            <li>
              <Link to="/zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="/yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/modus-create">Modus Create</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path="/:id" element={<Child />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default UrlParameterEx;
