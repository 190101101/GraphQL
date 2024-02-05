import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Count from "./Count";
import Add from "./Add";
import Table from "./Table";

const Books = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="container my-5">
      <div className="row">
        <Count />
        <Add />
        <Table />
      </div>
    </div>
  );
};

export default Books;
