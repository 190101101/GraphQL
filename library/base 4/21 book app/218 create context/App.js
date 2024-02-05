import React from "react";
import {BookProvider} from "./context/BookContext";

const App = () => {
  return <BookProvider>Hello Cookies</BookProvider>;
};

export default App;
