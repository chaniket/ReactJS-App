import { NavLink } from "react-router-dom";
import "./header.css"; // Import the CSS file for styles
import ContactDetails from "../components/AboutPage/ContactDetails";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "blue",
      fontSize: "25px",
    };
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact="true"
              to="/"
              activeclassname="active"
            >
              {
                //style={navLinkStyles}
              }
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users" activeclassname="active">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/error" activeclassname="active">
              Error Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function Home() {
  console.log("Home");
  return <h2>Home Header</h2>;
}

function About() {
  console.log("About");
  return <h2>About Header</h2>;
}

function Users() {
  console.log("Users");
  return (
    <>
      <h2>Users Header</h2>
    </>
  );
}

export { Header, Home, About, Users };
