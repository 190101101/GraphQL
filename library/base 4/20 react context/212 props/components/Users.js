import React, { useState, useEffect } from "react";
import User from "./User";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsersList(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1000);
  }, []);

  console.log(usersList);

  return (
    <>
      {usersList.map((user) => (
        <User key={user.id} props={user} />
      ))}
    </>
  );
};

export default Users;
