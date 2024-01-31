import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";

const App = () => {
  return (
    <div id="app">
      <div className="container">
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
      </div>
    </div>
  );
};

export default App;
