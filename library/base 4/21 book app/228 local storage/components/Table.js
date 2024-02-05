import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const Table = () => {
  const { books, dispatch } = useContext(BookContext);

  return (
    <div className="mb-3 offset-md-2 col-md-8">
      <table className="table table-dark">
        <thead className="text-warning">
          <tr>
            <th>title</th>
            <th>author</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr className="text-success" key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button
                  onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
                  className="btn btn-sm btn-outline-warning"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
