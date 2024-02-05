import React from "react";
import Navbar from "./components/content/Navbar";
import Jumbotron from "./components/content/Jumbotron";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <div className="container my-5">
        <Jumbotron />
        <Contact />
      </div>
    </>
  );
};

export default App;
