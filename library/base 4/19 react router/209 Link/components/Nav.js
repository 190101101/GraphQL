import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {

  const navStyle = {
    color:'deeppink',
    textDecoration:'none'
  }

  return (
    <ul>
      <li>
        <Link style={navStyle} to="/">home</Link>
      </li>
      <li>
        <Link style={navStyle} to="/article">article</Link>
      </li>
      <li>
        <Link style={navStyle} to="/category">category</Link>
      </li>
    </ul>
  );
};

export default Nav;
