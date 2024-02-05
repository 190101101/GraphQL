import React from "react";
import Moment from "react-moment";
import Auth from "../hooks/Auth";

const Profile = ({ session:{activeUser} }) => {
  
  return (
    <div>
      <h3>Profile</h3>
      <Moment format="YYYY/MM/DD">{activeUser.createdAt}</Moment>
      <h4>@{activeUser.username}</h4>
    </div>
  );
};

export default Auth(session => session && session.activeUser)(Profile);
