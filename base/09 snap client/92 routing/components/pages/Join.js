import React from "react";

const Join = () => {
  return (
    <>
      <form class="user-form">
        <label>
          <input type="text" placeholder="username" />
        </label>
        <label>
          <input type="password" placeholder="password" />
        </label>
        <label>
          <input type="password" placeholder="confirm password" />
        </label>
        <label>
          <button>Join</button>
        </label>
      </form>
    </>
  );
};

export default Join;
