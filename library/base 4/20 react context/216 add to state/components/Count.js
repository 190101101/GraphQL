import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Count = () => {
  const [usersList, setUsersList] = useContext(UserContext);

  return (
    <div>count: {usersList.length}</div>
  )
}

export default Count