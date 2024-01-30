import React from "react";
import { SIGN_IN } from "../../queries";
import { Mutation } from "@apollo/client/react/components";
import Error from "../Error";

const initialState = {
  login: "",
  password: "",
};

class Login extends React.Component {
  state = { ...initialState };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e, signIn) => {
    e.preventDefault();
    signIn()
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <Mutation mutation={SIGN_IN} variables={{ username, password }}>
          {(signIn, { loading, error }) => (
            <form
              onSubmit={(e) => {
                this.onSubmit(e, signIn);
              }}
              class="user-form"
            >
              <label>
                <input
                  onChange={this.onChange}
                  name="username"
                  value={username}
                  type="text"
                  placeholder="username"
                />
              </label>
              <label>
                <input
                  onChange={this.onChange}
                  name="password"
                  value={password}
                  type="password"
                  placeholder="password"
                />
              </label>
              <label>
                <button>Login</button>
              </label>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default Login;
