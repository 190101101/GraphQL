import React from "react";
import Moment from "react-moment";
import DeleteComment from "./DeleteComment";

const Comment = ({ data, articleId }) => {
  return (
    <div className="card bg-dark mb-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <div className="text-info">@{data.username}</div>
            <div className="text-warning">{data.comment}</div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between">
          <div></div>
          <div>
            <Moment
              className="mr-2"
              date={data.createdAt}
              format="YYYY/MM/DD"
            />
            <DeleteComment data={{data, articleId}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
