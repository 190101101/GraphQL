import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Book = ({ book }) => {
  return (
    <div>
      {book && (
        <div className="border border-success">
          <ul>
            <li>{book.title}</li>
            <li>{book.author}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Book;
