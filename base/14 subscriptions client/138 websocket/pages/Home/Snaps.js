import React from "react";
import { useQuery } from "@apollo/client";
import TimeAgo from "react-timeago";
import { SNAPS } from "../../graphql/query";

const Snaps = () => {
  const { data, loading, error } = useQuery(SNAPS);

  return (
    <>
      <div>
        {loading && <div className="loading">loading...</div>}
        {error && <div className="loading">error...</div>}

        <ul className="snaps">
          {data &&
            data.snaps.map((snap) => (
              <li key={snap.id} className={snap.id < 0 ? "optimistic" : ""}>
                <div className="title">
                  <span className="username">@{snap.user.username} </span>
                  <span>{snap.text}</span>
                </div>
                <div className="date">
                  {snap.id < 0 ? (
                    "sending..."
                  ) : (
                    <TimeAgo date={snap.createdAt} />
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="counter">{data && data.snaps.length} snap(s)</div>
    </>
  );
};

export default Snaps;
