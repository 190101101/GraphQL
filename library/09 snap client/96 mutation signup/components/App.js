import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <div id="app">
      <div class="container">
        <Root />
      </div>
    </div>
  );
};

export default App;
