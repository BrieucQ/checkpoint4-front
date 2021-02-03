import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.scss";

function Navbar() {
  return (
    <div className="header">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">My Projects</Link>
        </li>
        <li>
          <Link to="/Aboutme">About Me</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
