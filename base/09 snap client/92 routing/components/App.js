import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <div id="app">
      <div class="container">
        <Header />
        <Root />
      </div>
    </div>
  );
};

export default App;
