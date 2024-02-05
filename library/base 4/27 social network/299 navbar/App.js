import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-success">hello cookie</h1>
      </div>
    </>
  );
};

export default App;
