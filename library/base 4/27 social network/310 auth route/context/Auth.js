import React, { createContext, useReducer } from "react";
import { jwtDecode } from "jwt-decode";

const initialState = {
  user: null,
};

if (localStorage.getItem("user")) {
  const decode = jwtDecode(localStorage.getItem("user"));
  if (decode.exp * 1000 < Date.now()) {
    localStorage.removeItem("user");
  } else {
    initialState.user = decode;
  }
}

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: (data) => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (data) => {
    localStorage.setItem("user", data.token);
    dispatch({
      type: "LOGIN",
      payload: data,
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
