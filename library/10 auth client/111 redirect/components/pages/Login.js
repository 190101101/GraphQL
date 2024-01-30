import React from "react";
import { withRouter } from "react-router-dom";
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

  resetState = () => {
    this.setState({ ...initialState });
  };

  onSubmit = (e, signIn) => {
    e.preventDefault();
    signIn()
      .then(({data}) => {
        localStorage.setItem('token', data.signIn.token);
        this.resetState();
        this.props.history.push('/');
      })
      .catch((e) => console.log(e));
  };

  formValidate = () => {
    const {username, password} = this.state;
    return !username || !password;
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
                  type="text"
                  value={username}
                  placeholder="username"
                />
              </label>
              <label>
                <input
                  onChange={this.onChange}
                  name="password"
                  type="password"
                  value={password}
                  placeholder="password"
                />
              </label>
              <label>
                <button disabled={loading || this.formValidate()}>Login</button>
              </label>
              {loading && <div>loading...</div>}
              {error && <Error error={error}/>}
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(Login);
