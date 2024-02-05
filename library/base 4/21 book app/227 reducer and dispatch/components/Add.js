import React, { useState, useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";

const Add = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const authorInput = (e) => {
    setAuthor(e.target.value);
  };

  const formValidate = () => {
    return title.length > 2 && title !== " " && author.length > 2 && author;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValidate()) {
      dispatch({ type: "ADD_BOOK", book: { title, author } });
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div className="mb-3 offset-md-2 col-md-8">
      <div className="d-flex justify-content-center">
        <form onSubmit={submitHandler} className="form-inline">
          <input
            onChange={titleInput}
            value={title}
            type="text"
            name="title"
            placeholder="title"
            className="mb-1 text-warning bg-dark border border-warning form-control form-control-sm mr-1"
          />
          <input
            onChange={authorInput}
            value={author}
            type="text"
            name="author"
            placeholder="author"
            className="mb-1 text-warning bg-dark border border-warning form-control form-control-sm mr-1"
          />
          <button type="submit" className="btn btn-sm btn-outline-warning">
            add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
