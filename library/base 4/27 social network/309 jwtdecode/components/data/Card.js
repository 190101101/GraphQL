import Moment from "react-moment";
import React from "react";
import {Link} from "react-router-dom";

const Card = ({ data }) => {
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
              <span
                className="mr-2"
                onClick={() => console.log(`like: ${data.id}`)}
              >
                <i
                  className="text-success fa fa-thumbs-up"
                  aria-hidden="true"
                ></i>
              </span>
              <span className="text-success">{data.likeCount}</span>
            </span>
            <span className="mr-2">
              <Link
                to={`/article/${data.id}`}
                className="mr-2"
                onClick={() => console.log(`comment: ${data.id}`)}
              >
                <i className="text-info fa fa-comments" aria-hidden="true"></i>
              </Link>
              <span className="text-info">{data.commentCount}</span>
            </span>
          </div>
          <div>
            <Moment
              className="mr-2"
              date={data.createdAt}
              format="YYYY/MM/DD"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
