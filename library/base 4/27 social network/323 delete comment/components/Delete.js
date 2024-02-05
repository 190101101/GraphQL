import React from "react";
import { useMutation } from "@apollo/client";
import { MutationDeleteArticle } from "../graphql/mutation";

const Delete = ({ article, user }) => {
  const [DeleteArticle] = useMutation(MutationDeleteArticle, {
    update(proxy, result) {},
    onError(error) {
      console.log(error);
    },
  });

  const toggleDelete = (id) => {
    DeleteArticle({ variables: { id: id } });
  };

  return (
    <span className="mr-2">
      <span className="mr-2" onClick={() => toggleDelete(article.id)}>
        <i className="text-danger fa fa-trash-o" aria-hidden="true"></i>
      </span>
      <span className="text-success">{article.DeleteCount}</span>
    </span>
  );
};

export default Delete;
