import React, { useState } from "react";
import Users from "./components/Users";
import Count from "./components/Count";

const App = () => {
  const [count, setCount] = useState(0);

  const counterHandler = (userCount) => {
    setCount(userCount);
  };

  return (
    <>
      <Count userCount={count}/>
      <Users getCount={counterHandler} />
    </>
  );
};

export default App;
