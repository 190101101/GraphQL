import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Like = ({ article, user }) => {
  console.log(article);

  const toggleLike = () => {};

  return (
    <span className="mr-2">
      <span className="mr-2" onClick={toggleLike}>
        <i className="text-success fa fa-thumbs-up" aria-hidden="true"></i>
      </span>
      <span className="text-success">{article.likeCount}</span>
    </span>
  );
};

export default Like;
