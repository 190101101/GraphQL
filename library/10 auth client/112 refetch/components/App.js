import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import sessionWrapperHOC from './sessionWrapperHOC';

const Root = ({refetch}) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" render={() => <Login refetch={refetch}/>} />
          <Route path="/join" render={() => <Join refetch={refetch}/>} />
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
