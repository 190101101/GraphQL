import React from "react";
import { BookProvider } from "./context/BookContext";
import Navbar from "./components/Navbar";
import Books from "./components/Books";

const App = () => {
  return (
    <BookProvider>
      <Navbar />
      <Books />
    </BookProvider>
  );
};

export default App;
