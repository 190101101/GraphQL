import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SessionHook from "./components/SessionHook";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Join from "./pages/Join";
import Login from "./pages/Login";

const Rootes = ({ refetch, session }) => {
  return (
    <BrowserRouter>
      <Header session={session} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/login" render={() => <Login refetch={refetch} />} />
        <Route path="/join" render={() => <Join refetch={refetch} />} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
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
