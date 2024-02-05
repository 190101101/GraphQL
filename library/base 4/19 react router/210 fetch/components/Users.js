import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 200);
  }, []);

  return (
    <React.Fragment>
      <ul>
        {users.length === 0 ? (
          <span>loading...</span>
        ) : (
          users.map((user) => <li key={user.id}><Link props={user} to={`/user/${user.username}`}>{user.name}</Link></li>)
        )}
      </ul>
    </React.Fragment>
  );
};

export default Users;
