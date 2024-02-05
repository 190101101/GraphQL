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
            <span className="mr-2">
              <span className="mr-2" onClick={() => console.log(`like: ${data.id}`)}>
                <i className="text-success fa fa-thumbs-up" aria-hidden="true"></i>
              </span>
              <span className="text-success">{data.likeCount}</span>
            </span>
            <span className="mr-2">
              <span className="mr-2" onClick={() => console.log(`comment: ${data.id}`)}>
                <i className="text-info fa fa-comments" aria-hidden="true"></i>
              </span>
              <span className="text-info">{data.commentCount}</span>
            </span>
          </div>
          <div>
            <span className="mr-2">{data.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
