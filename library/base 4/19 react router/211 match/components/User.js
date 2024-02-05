import React from "react";

const User = ({match}) => {
  const {username} = match.params;
  return (
    <div>
      <h3>@{username}'s page</h3>
    </div>
  );
};

export default User;
