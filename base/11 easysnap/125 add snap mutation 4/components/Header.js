import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const LinksWithLogin = ({ session }) => (
  <React.Fragment>
    <NavLink to="/profile">@{session.activeUser.username}</NavLink>
    <Logout/>
  </React.Fragment>
);

const LinksWithUnLogin = () => (
  <React.Fragment>
    <NavLink to="/login">login</NavLink>
    <NavLink to="/join">join</NavLink>
  </React.Fragment>
);

const Header = ({ session }) => {
  return (
    <div class="header">
      <div class="logo">
        <h2 class="logo__title">easysnap</h2>
      </div>

      <div class="header_menu">
        <NavLink to="/" exact class="active">
          snaps
        </NavLink>
        {session.activeUser ? (
          <LinksWithLogin session={session} />
        ) : (
          <LinksWithUnLogin />
        )}
      </div>
    </div>
  );
};

export default Header;
