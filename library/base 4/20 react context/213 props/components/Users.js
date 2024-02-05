import React, { useState, useEffect } from "react";
import User from "./User";

// const Users = ({counterHandler}) => {
const Users = (props) => {
  const [usersList, setUsersList] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsersList(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
      props.getCount(usersList.length);
    }, 1000);
  }, [usersList]);

  return (
    <>
      {usersList.map((user) => (
        <User key={user.id} props={user} />
      ))}
    </>
  );
};

export default Users;
