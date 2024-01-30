import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Profile from "./pages/Profile";
import sessionWrapperHOC from "./sessionWrapperHOC";

const Root = ({ refetch, session }) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header session={session} />
        <Switch>
          <Route path="/" exact render={() => <Home session={session}/>} />
          <Route path="/login" render={() => <Login refetch={refetch} />} />
          <Route path="/join" render={() => <Join refetch={refetch} />} />
          <Route path="/profile" render={() => <Profile session={session} />} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

const RootWithSessionWrapper = sessionWrapperHOC(Root);

const App = () => {
  return (
    <div id="app">
      <div class="container">
        <RootWithSessionWrapper />
      </div>
    </div>
  );
};

export default App;
