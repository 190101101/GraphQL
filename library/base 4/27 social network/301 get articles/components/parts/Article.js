import React from "react";

const Article = ({ data }) => {
  return (
    <div className="card bg-dark mb-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <div className="text-info">@{data.username}</div>
            <div className="text-warning">{data.article}</div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between">
          <div>
            <span className="mr-2">{data.createdAt} | </span>
            <span className="mr-2">likes: {data.likeCount} | </span>
            <span className="mr-2">comments: {data.commentCount} </span>
          </div>
          <div>
            <button className="btn btn-sm btn-outline-success mr-2">like</button>
            <button className="btn btn-sm btn-outline-success">comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
