import React, { useState } from "react";

const initialState = {
  username: "",
  password: "",
  confirm: "",
};

const Join = () => {
  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues(initialState);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="user-form">
        <label>
          <input
            type="text"
            onChange={onChange}
            value={values.username}
            name="username"
            placeholder="username"
          />
        </label>
        <label>
          <input
            type="password"
            onChange={onChange}
            value={values.password}
            name="password"
            placeholder="password"
          />
        </label>
        <label>
          <input
            type="password"
            onChange={onChange}
            value={values.confirm}
            name="confirm"
            placeholder="confirm password"
          />
        </label>
        <label>
          <button>Join</button>
        </label>
      </form>
    </>
  );
};

export default Join;
