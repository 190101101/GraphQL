import React from "react";

const Register = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h3>Register</h3>

          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">username</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
              />
              <small id="usernameHelp" className="form-text text-muted">
                We'll never share your username with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
                placeholder="Password"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword2">Confirm password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                aria-describedby="confirmHelp"
                placeholder="Password"
              />
              <small id="confirmHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button type="submit" className="btn btn-success">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
