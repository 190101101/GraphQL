import React, { createContext, useState } from "react";
import { v4 } from "uuid";

const initialState = [
  { id: v4(Math.random()), title: "book 1", author: "person 1" },
  { id: v4(Math.random()), title: "book 2", author: "person 2" },
  { id: v4(Math.random()), title: "book 3", author: "person 3" },
];

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState(initialState);
  const [showBook, setShowBook] = useState(false);

  const addBook = (title, author) => {
    setBooks([...books, { id: v4(Math.random()), title, author }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const showBookHandler = (book) => {
    setShowBook(book);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        removeBook,
        showBook,
        setShowBook,
        showBookHandler,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
