import React from "react";
import Count from "./Count";
import Add from "./Add";
import Table from "./Table";

const Books = () => {
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
