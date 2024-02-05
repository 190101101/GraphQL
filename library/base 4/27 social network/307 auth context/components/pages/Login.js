import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { mutationLogin } from "../../graphql/mutation";
import Error from "../content/Error";

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const [login, { loading }] = useMutation(mutationLogin, {
    update(proxy, response) {
      console.log(response);
    },
    onError(error) {
      setErrors(error.graphQLErrors[0].extensions.exception.errors);
    },
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login({ variables: values });
    setErrors({});
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h3>Register</h3>
          <form onSubmit={onSubmitHandler}>
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

              <small
                id="usernameHelp"
                className={`form-text 
                ${errors.username ? "text-danger" : "text-muted"}`}
              >
                {errors.username
                  ? errors.username
                  : "we'll never share your username with anyone else"}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">password</label>
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
              <small
                id="emailHelp"
                className={`form-text ${
                  errors.password ? "text-danger" : "text-muted"
                }`}
              >
                {errors.password
                  ? errors.password
                  : "we'll never share your password with anyone else"}
              </small>
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
          <Error errors={errors} />
        </div>
      </div>
    </div>
  );
};

export default Login;
