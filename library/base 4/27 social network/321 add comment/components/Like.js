import React from "react";
import { useMutation } from "@apollo/client";
import { MutationLikeArticle } from "../graphql/mutation";

const Like = ({ article, user }) => {

  const [LikeArticle] = useMutation(MutationLikeArticle, {
    update(proxy, result) {},
    onError(error) {
      console.log(error);
    },
  });

  const toggleLike = (id) => {
    LikeArticle({ variables: { id: id } });
  };

  return (
    <span className="mr-2">
      <span className="mr-2" onClick={() => toggleLike(article.id)}>
        <i className="text-success fa fa-thumbs-up" aria-hidden="true"></i>
      </span>
      <span className="text-success">{article.likeCount}</span>
    </span>
  );
};

export default Like;
