import React from "react";
import { Query, Mutation } from "@apollo/client/react/components";
import TimeAgo from "react-timeago";
import { GET_SNAPS, ADD_SNAP } from "../../queries/index";
import Error from "../Error";

class Home extends React.Component {
  state = {
    text: "",
    user_id: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formValidate = () => {
    const { text } = this.state;
    return !text || text === " ";
  };

  componentDidMount = () => {
    const { session } = this.props;

    if (session && session.activeUser) {
      this.setState({
        user_id: this.props.session.activeUser.id,
      });
    }
  };

  onSubmit = (e, addSnap) => {
    e.preventDefault();

    if (!this.formValidate()) {
      addSnap()
        .then(({ data }) => {
          this.setState({ text: "" });
        })
        .catch((e) => console.log(e));
    }
  };

  updateCache = (cache, { data: { createSnap } }) => {
    const { snaps } = cache.readQuery({
      query: GET_SNAPS,
    });
    cache.writeQuery({
      query: GET_SNAPS,
      data: {
        snaps: [createSnap, ...snaps],
      },
    });
  };

  render() {
    const { session } = this.props;

    return (
      <>
        <div class="description">
          <p class="sub_header__desc">
            simple snap app with <span>react</span>.
          </p>
        </div>

        <div>
          <Mutation
            mutation={ADD_SNAP}
            variables={{ ...this.state }}
            refetchQueries={[{ query: GET_SNAPS }]}
            update={this.updateCache}
          >
            {(addSnap, { loading, error }) => {
              return (
                <form
                  onSubmit={(e) => {
                    this.onSubmit(e, addSnap);
                  }}
                >
                  <input
                    class="add-snap__input"
                    type="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    disabled={!(session && session.activeUser) || loading}
                    placeholder={
                      session && session.activeUser
                        ? "add Snap"
                        : "please login for add a new snap"
                    }
                  />
                </form>
              );
            }}
          </Mutation>
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
