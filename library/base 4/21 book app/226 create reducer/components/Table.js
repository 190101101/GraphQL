import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

const Table = () => {
  const { books, removeBook, showBook, showBookHandler } =
    useContext(BookContext);

  return (
    <div className="mb-3 offset-md-2 col-md-8">
      <table className="table table-dark">
        <thead className="text-warning">
          <tr>
            <th>title</th>
            <th>author</th>
            <th>show</th>
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
                  onClick={() => showBookHandler(book)}
                  className="btn btn-sm btn-outline-success"
                >
                  show
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    removeBook(book.id)
                    showBookHandler(false)
                  }}
                  className="btn btn-sm btn-outline-warning"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Book book={showBook} />
    </div>
  );
};

export default Table;
