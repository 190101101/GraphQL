import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthProvider } from "./context/Auth";

import AuthRoute from "./utils/AuthRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Article from "./pages/Article";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <AuthRoute path="/register" component={Register} />
          <AuthRoute path="/login" component={Login} />
          <Route path="/article/:id" component={Article} />
          <Route>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
