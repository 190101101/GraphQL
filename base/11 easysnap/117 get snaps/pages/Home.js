import React from "react";
import TimeAgo from "react-timeago";
import { useQuery } from "@apollo/client";
import { SNAPS } from "../graphql/query";

const Home = () => {
  const { data, loading, error } = useQuery(SNAPS);

  return (
    <>
      <div className="description">
        <p className="sub_header__desc">
          simple snap app with <span>react</span>.
        </p>
      </div>

      <div>
        <form>
          <input
            className="add-snap__input"
            type="text"
            placeholder="add snap"
          />
        </form>
      </div>
      <div>
        {loading && <div className="loading">loading...</div>}
        {error && <div className="loading">error...</div>}

        <ul className="snaps">
          {data &&
            data.snaps.map((snap) => (
              <li key={snap.id}>
                <div className="title">
                  <span className="username">@{snap.user.username} </span>
                  <span>{snap.text}</span>
                </div>
                <div className="date">
                  <TimeAgo date={snap.createdAt} />
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="counter">{data && data.snaps.length} snap(s)</div>
    </>
  );
};

export default Home;
