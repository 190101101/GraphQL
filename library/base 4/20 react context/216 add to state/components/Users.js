import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";

const Users = () => {
  const [usersList, setUsersList] = useContext(UserContext);

  return (
    <>
      {usersList.map((user) => (
        <User key={user.id} props={user} />
      ))}
    </>
  );
};

export default Users;
