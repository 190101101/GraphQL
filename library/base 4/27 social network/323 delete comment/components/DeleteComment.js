import React from "react";
import { useMutation } from "@apollo/client";
import { MutationDeleteComment } from "../graphql/mutation";

const DeleteComment = ({ data }) => {
  const [DeleteComment] = useMutation(MutationDeleteComment, {
    update(proxy, result) {},
    onError(error) {
      console.log(error);
    },
  });

  const onDelete = (id) => {
    DeleteComment({
      variables: { id: data.data.id, articleId: data.articleId },
    });
  };

  return (
    <span className="mr-2">
      <span className="mr-2" onClick={() => DeleteComment(data.data.id)}>
        <i className="text-danger fa fa-trash-o" aria-hidden="true"></i>
      </span>
    </span>
  );
};

export default DeleteComment;
