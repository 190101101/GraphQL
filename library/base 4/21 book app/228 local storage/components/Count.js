import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Count = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="mb-3 py-2 offset-md-2 col-md-8">
      <div className="d-flex justify-content-center border border-dark">
        <span className="text-warning">count Book: {books.length}</span>
      </div>
    </div>
  );
};

export default Count;
