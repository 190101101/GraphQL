import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutation";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [error, setError] = useState(false);
  const [values, setValues] = useState(initialState);

  const [SignInMutation, { loading }] = useMutation(SIGN_IN, {
    update(proxy, result) {
      console.log(result);
    },
    onError(error) {
      setError(error.graphQLErrors[0].message);
    },
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formValidation = () => {
    const { username, password } = values;
    return !username || !password;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    SignInMutation({ variables: values });
    setValues(initialState);
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 1000);
  }, [error]);

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
          <button disabled={loading || formValidation()}>Login</button>
        </label>
      </form>
      {loading && <div className="loading">loading...</div>}
      {error && <div className="loading">{error}</div>}
    </>
  );
};

export default Login;
