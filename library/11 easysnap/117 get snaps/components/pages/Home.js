import React from "react";
import { Query } from "@apollo/client/react/components";
import { GET_SNAPS } from "../../queries/index";
import Error from "../Error";

const Home = () => {
  return (
    <>
      <div class="description">
        <p class="sub_header__desc">
          simple snap app with <span>react</span>.
        </p>
      </div>

      <div>
        <form>
          <input class="add-snap__input" type="text" placeholder="add snap" />
        </form>
      </div>
      <div>
        <Query query={GET_SNAPS}>
          {({ data, loading, error }) => {
            if (loading) return <div>loading...</div>;
            if (error) return <Error error={error} />;

            return (
              <ul class="snaps">
                {data.snaps.map((snap) => (
                  <li key={snap.id}>
                    <div class="title">{snap.text}</div>
                    <div class="date">
                      <div className="username">@{snap.user.username}</div>
                      <span>now</span>
                    </div>
                  </li>
                ))}
              </ul>
            );
          }}
        </Query>
      </div>
      <div class="counter">1 snap(s)</div>
    </>
  );
};

export default Home;
