import React, { useState } from "react";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const obSubmitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h3>Register</h3>

          <form onSubmit={obSubmitHandler}>
            <div className="form-group">
              <label htmlFor="exampleInputUsername1">username</label>
              <input
                onChange={onChange}
                value={values.username}
                name="username"
                type="text"
                className="form-control"
                id="exampleInputUsername1"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
              />
              <small id="usernameHelp" className="form-text text-muted">
                We'll never share your username with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">email</label>
              <input
                onChange={onChange}
                value={values.email}
                name="email"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={onChange}
                value={values.password}
                name="password"
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
              <label htmlFor="exampleInputPassword2">Confirm password</label>
              <input
                onChange={onChange}
                value={values.confirm}
                name="confirm"
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
