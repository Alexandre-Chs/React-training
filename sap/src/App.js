import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Component } from "react";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Profile from "./components/Profile";
import Error from "./components/Error";

import Menu from "./components/Menu";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      underConst: {
        Docs: false,
        Tutorials: true,
        Community: false,
      },
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/tutorial" component={Tutorials} />
          <Route path="/community" component={Community} />
          <Route path="/users/:profileId" component={Profile} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
