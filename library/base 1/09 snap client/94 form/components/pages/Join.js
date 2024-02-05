import React, { Component } from "react";

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

  render() {
    return (
      <>
        <form class="user-form">
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
        </form>
      </>
    );
  }
}

export default Join;
