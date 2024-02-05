import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SessionHook from "./hooks/SessionHook";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Auth from "./hooks/Auth";

const Rootes = ({ refetch, session }) => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header session={session} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Auth path="/login" render={() => <Login refetch={refetch} />} condition={(activeUser) => activeUser != null} />
          <Auth path="/join" render={() => <Join refetch={refetch} />} condition={(activeUser) => activeUser != null} />
          <Auth path="/profile" render={() => <Profile session={session} />} condition={(activeUser) => activeUser == null} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

const SessionHookWrapper = SessionHook(Rootes);

const App = () => {
  return (
    <div id="app">
      <div className="container">
        <SessionHookWrapper />
      </div>
    </div>
  );
};

export default App;
