import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MutationCreateArticle } from "../graphql/mutation";
import { queryArticles } from "../graphql/query";
import { Loading } from "../components/Response";

const initialState = {
  article: "",
};

const ArticleForm = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialState);

  const [AddArticle, { loading }] = useMutation(MutationCreateArticle, {
    update(proxy, { data: { CreateArticle: data } }) {
      setValues(initialState);
    },
    onError(error) {
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        setErrors(error.graphQLErrors[0].extensions.exception.errors);
      } else {
        console.error("error:", error);
      }
    },
    refetchQueries: [queryArticles],
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    AddArticle({ variables: values });
    setErrors({});
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <Loading data={{ loading }} />
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            onChange={onChange}
            value={values.article}
            name="article"
            type="text"
            className="form-control"
            id="inputarticle"
            aria-describedby="articleHelp"
            placeholder="Enter article"
          />
          <small
            id="articleHelp"
            className={`form-text 
                ${errors.article ? "text-danger" : "text-muted"}`}
          >
            {errors.article ? errors.article : "write new article"}
          </small>
        </div>
        <button type="submit" className="btn btn-success btn-block">
          create article
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
