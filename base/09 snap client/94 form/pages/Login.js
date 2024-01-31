import React, { useState } from "react";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues(initialState);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="user-form">
        <label>
          <input
            onChange={onChange}
            value={values.username}
            type="text"
            name="username"
            placeholder="username"
          />
        </label>
        <label>
          <input
            onChange={onChange}
            value={values.password}
            type="password"
            name="password"
            placeholder="password"
          />
        </label>
        <label>
          <button>Login</button>
        </label>
      </form>
    </>
  );
};

export default Login;
