import React, { useState, useContext, useEffect } from "react";
import { BookContext } from "../context/BookContext";

const Add = () => {
  const { addBook, showBook, showBookHandler } = useContext(BookContext);

  const [title, setTitle] = useState(false);
  const [author, setAuthor] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const authorInput = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitStatus(true);
    showBookHandler(false)
  };

  useEffect(() => {
    if (submitStatus) {
      addBook(title, author);
      setTimeout(() => {
        setSubmitStatus(false);
      }, 1000);
    }
  }, [submitStatus]);

  return (
    <div className="mb-3 offset-md-2 col-md-8">
      <div className="d-flex justify-content-center">
        <form onSubmit={submitHandler} className="form-inline">
          <input
            onChange={titleInput}
            type="text"
            name="title"
            placeholder="title"
            className="text-warning bg-dark border border-warning form-control form-control-sm mr-1"
          />
          <input
            onChange={authorInput}
            type="text"
            name="author"
            placeholder="author"
            className="text-warning bg-dark border border-warning form-control form-control-sm mr-1"
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
