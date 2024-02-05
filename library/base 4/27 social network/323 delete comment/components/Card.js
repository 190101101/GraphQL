import Moment from "react-moment";
import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import Like from "./Like";
import Delete from "./Delete";

const Card = ({ data }) => {
  const { user } = useContext(AuthContext);
  const match = useRouteMatch();

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
            <Like article={data} user={user} />
            {match.path === "/home" && (
              <span className="mr-2">
                <Link
                  to={`/article/${data.id}`}
                  className="mr-2"
                  onClick={() => console.log(`comment: ${data.id}`)}
                >
                  <i
                    className="text-info fa fa-comments"
                    aria-hidden="true"
                  ></i>
                </Link>
                <span className="text-info">{data.commentCount}</span>
              </span>
            )}
          </div>
          <div>
            <Moment
              className="mr-2"
              date={data.createdAt}
              format="YYYY/MM/DD"
            />
            {user && user.username === data.username && (
              <Delete article={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
