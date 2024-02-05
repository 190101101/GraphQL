import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MutationCreateComment } from "../graphql/mutation";
import { Loading } from "../components/Response";

const initialState = {
  articleId: "",
  comment: "",
};

const CommentForm = (props) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialState);

  const [AddComment, { loading }] = useMutation(MutationCreateComment, {
    update(proxy, { data: { CreateComment: data } }) {
      setValues(initialState);
    },
    onError(error) {
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        setErrors(error.graphQLErrors[0].extensions.exception.errors);
      } else {
        console.error("error:", error);
      }
    },
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    AddComment({
      variables: {
        articleId: props.data.id,
        comment: values.comment,
      },
    });
    setErrors({});
  };

  return (
    <div className="mb-2">
      <div className="d-flex justify-content-between mb-2">
        <Loading data={{ loading }} />
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            onChange={onChange}
            value={values.comment}
            name="comment"
            type="text"
            className="form-control"
            id="inputcomment"
            aria-describedby="commentHelp"
            placeholder="Enter comment"
          />
          <small
            id="commentHelp"
            className={`form-text 
                ${errors.comment ? "text-danger" : "text-muted"}`}
          >
            {errors.comment ? errors.comment : "write comment"}
          </small>
        </div>
        <button type="submit" className="btn btn-success btn-block">
          comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
