import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = ["Home", "Register", 'Login'];
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand">Social</a>
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          {menu.map((el) => (
            <li
              key={el}
              onClick={() => setActiveLink(el)}
              className={`nav-item ${activeLink === el ? "active" : ""}`}
            >
              <Link className="nav-link" to={el}>{el}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
