import React from "react";
import Moment from 'react-moment';

const Profile = ({ session : {activeUser} }) => (
  <div>
    <h3>Profile</h3>
    <Moment date={activeUser.createdAt} format="YYYY/MM/DD" />
    <h4>username: @{activeUser.username}</h4>
  </div>
);

export default Profile;
