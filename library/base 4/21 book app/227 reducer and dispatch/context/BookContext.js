import React, { createContext, useState, useReducer } from "react";
import { BookReducer } from "../reducers/BookReducer";

import { v4 } from "uuid";

const initialState = [
  { id: v4(Math.random()), title: "book 1", author: "person 1" },
  { id: v4(Math.random()), title: "book 2", author: "person 2" },
  { id: v4(Math.random()), title: "book 3", author: "person 3" },
];

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, initialState);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
