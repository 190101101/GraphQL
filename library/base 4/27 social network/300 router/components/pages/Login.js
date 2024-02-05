import React from "react";

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h3>Login</h3>

          <form>
            <div className="form-group">
              <label for="exampleInputLogin1">login</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLogin1"
                aria-describedby="loginHelp"
                placeholder="Enter email"
              />
              <small id="loginHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                aria-describedby="passwordHelp"
              />
              <small id="passwordHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button type="submit" className="btn btn-success">
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
