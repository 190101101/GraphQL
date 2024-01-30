import React from "react";
import { CREATE_USER } from "../../queries";
import { Mutation } from "@apollo/client/react/components";
import Error from "../Error";

const initialState = {
  username: "",
  password: "",
  confirm: "",
};

class Join extends React.Component {
  state = { ...initialState };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState({ ...initialState });
  };

  onSubmit = (e, createUser) => {
    e.preventDefault();
    createUser()
      .then(({data}) => {
        console.log(data);
        localStorage.setItem('token', data.createUser.token);
        this.resetState();
      })
      .catch((e) => console.log(e));
  };

  formValidate = () => {
    const { username, password, confirm } = this.state;
    return !username || !password || !confirm || password !== confirm;
  };

  render() {
    const { username, password, confirm } = this.state;
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
                  value={username}
                  onChange={this.onChange}
                  name="username"
                  type="text"
                  placeholder="username"
                />
              </label>
              <label>
                <input
                  value={password}
                  onChange={this.onChange}
                  name="password"
                  type="password"
                  placeholder="password"
                />
              </label>
              <label>
                <input
                  value={confirm}
                  onChange={this.onChange}
                  name="confirm"
                  type="password"
                  placeholder="confirm password"
                />
              </label>
              <label>
                <button disabled={loading || this.formValidate()}>Join</button>
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
