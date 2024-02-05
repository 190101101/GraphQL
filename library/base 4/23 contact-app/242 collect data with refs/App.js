import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Contact />
      </div>
    </>
  );
};

export default App;
