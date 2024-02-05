import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cities from "./components/Cities";
import Clock from "./components/Clock";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Cities}/>
        <Route path='/:id' component={Clock}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
