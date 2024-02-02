import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SessionHook from "./components/SessionHook";
import Header from "./components/Header";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";

const Root = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" component={Join} />
        <Route path="/login" component={Login} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const SessionHookWrapper = SessionHook(Root);

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
