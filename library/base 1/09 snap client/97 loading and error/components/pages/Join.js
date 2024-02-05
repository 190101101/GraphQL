import React, { Component } from "react";
import { CREATE_USER } from "../../queries";
import { Mutation } from "@apollo/client/react/components";
import Error from "../Error";

class Join extends Component {
  state = {
    username: "",
    password: "",
    confirm: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e, createUser) => {
    e.preventDefault();
    createUser().then((data) => console.log(data));
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <Mutation mutation={CREATE_USER} variables={{ username, password }}>
          {(createUser, { loading, error }) => (
            <form
              class="user-form"
              onSubmit={(e) => {
                this.onSubmit(e, createUser);
              }}
            >
              <label>
                <input
                  onChange={this.onChange}
                  name="username"
                  type="text"
                  placeholder="username"
                />
              </label>
              <label>
                <input
                  onChange={this.onChange}
                  name="password"
                  type="password"
                  placeholder="password"
                />
              </label>
              <label>
                <input
                  onChange={this.onChange}
                  name="confirm"
                  type="password"
                  placeholder="confirm password"
                />
              </label>
              <label>
                <button>Join</button>
              </label>
              {loading && <div>loading...</div>}
              {error && <Error error={error} />}
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default Join;
