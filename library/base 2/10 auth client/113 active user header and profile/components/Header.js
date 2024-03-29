import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ session }) => {
  return (
    <div className="header">
      <div className="logo">
        <h2 className="logo__title">easysnap</h2>
      </div>

      <div className="header_menu">
        <NavLink to="/" exact className="active">
          snaps
        </NavLink>

        {session?.activeUser ? (
          <LinksWithLogin session={session} />
        ) : (
          <LinksWithUnLogin />
        )}
      </div>
    </div>
  );
};

const LinksWithLogin = (session) => {
  return (
    <Fragment>
      <NavLink to="/profile">@{session.session.activeUser.username}</NavLink>
    </Fragment>
  );
};

const LinksWithUnLogin = () => {
  return (
    <Fragment>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/join">join</NavLink>
    </Fragment>
  );
};

export default Header;
