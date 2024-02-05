import React from "react";
import { Query } from "@apollo/client/react/components";
import TimeAgo from "react-timeago";
import { GET_SNAPS } from "../../queries/index";
import Error from "../Error";

class Home extends React.Component {
  render() {
    const { session } = this.props;
    console.log(session);

    return (
      <>
        <div class="description">
          <p class="sub_header__desc">
            simple snap app with <span>react</span>.
          </p>
        </div>

        <div>
          <form>
            <input
              class="add-snap__input"
              type="text"
              disabled={!(session && session.activeUser)}
              placeholder={
                session && session.activeUser
                  ? "add Snap"
                  : "please login for add a new snap"
              }
            />
          </form>
        </div>
        <div>
          <Query query={GET_SNAPS}>
            {({ data, loading, error }) => {
              if (loading) return <div className="loading">loading...</div>;
              if (error) return <Error error={error} />;

              return (
                <>
                  <ul class="snaps">
                    {data.snaps.map((snap) => (
                      <li key={snap.id}>
                        <div class="title">
                          <span className="username">
                            @{snap.user.username}{" "}
                          </span>
                          <span>{snap.text}</span>
                        </div>
                        <div class="date">
                          <span>
                            <TimeAgo date={snap.createdAt} />
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div class="counter">{data.snaps.length} snap(s)</div>
                </>
              );
            }}
          </Query>
        </div>
      </>
    );
  }
}

export default Home;
