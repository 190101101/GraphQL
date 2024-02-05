import React, { useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const menu = user ? ["Home", "Logout"] : ["Home", "Register", "Login"];
  const [activeLink, setActiveLink] = useState("Home");
  console.log(user);

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
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {user && (
            <li key={456} className="nav-item">
              <a className="nav-link">@{user.username}</a>
            </li>
          )}
        </ul>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {menu.map((el) => (
            <li
              key={el}
              onClick={() => setActiveLink(el)}
              className={`nav-item ${activeLink === el ? "active" : ""}`}
            >
              {el === "Logout" ? (
                <a onClick={logout} className="nav-link">
                  {el}
                </a>
              ) : (
                <Link className="nav-link" to={`/${el.toLowerCase()}`}>
                  {el}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
