import React from "react";
import { useQuery } from "@apollo/client";
import { queryArticle } from "../graphql/query";
import Card from "../components/Card";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import { Loading, Error } from "../components/Response";

const Article = (props) => {
  const { loading, data } = useQuery(queryArticle, {
    variables: { id: props.match.params.id },
  });

  return (
    <div className="container my-5">
      <h1 className="text-center">articles</h1>
      <div className="row">
        <div className="col-md-12 mb-3">
          {loading ? (
            <Loading data={{ loading }} />
          ) : data ? (
            <>
              <Card key={data.article.id} data={data.article} />
              <CommentForm data={data.article} />
              {data.article.comments.map((comment) => (
                <Comment key={comment.id} data={comment} articleId={data.article.id} />
              ))}
            </>
          ) : (
            <>article not found</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
