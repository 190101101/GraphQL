import React from "react";
import Add from "./components/Add";
import Users from "./components/Users";
import Count from "./components/Count";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Add />
      <Count />
      <Users />
    </UserProvider>
  );
};

export default App;
