import React from "react";
import Users from "./components/Users";
import Count from "./components/Count";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Count />
      <Users />
    </UserProvider>
  );
};

export default App;
