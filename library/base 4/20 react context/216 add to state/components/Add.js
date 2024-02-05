import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Add = () => {
  const [usersList, setUsersList] = useContext(UserContext);

  const addUser = () => {
    const id = Math.round(Math.random() * 10000);
    setUsersList([
      ...usersList,
      {id: id, username: `user[${id}]`},
    ]);
  };

  return (
    <div>
      <button onClick={addUser}>add user</button>
    </div>
  );
};

export default Add;
