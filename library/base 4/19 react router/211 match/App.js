import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Article from "./components/Article";
import Category from "./components/Category";
import Users from "./components/Users";
import User from "./components/User";

const App = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/article" exact component={Article} />
        <Route path="/category" exact component={Category} />
        <Route path="/users" exact component={Users} />
        <Route path="/user/:username" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
