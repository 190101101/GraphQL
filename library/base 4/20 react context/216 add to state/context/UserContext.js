import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [usersList, setUsersList] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsersList(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [setUsersList]);

  return (
    <UserContext.Provider value={[usersList, setUsersList]}>
      {props.children}
    </UserContext.Provider>
  );
};
