import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../views/home";
import Detail from "../views/detail";
import Frame from "../layouts/Frame";
import Nav from "../layouts/Nav";

const routes = (
  <Router>
    <Frame>
      <Nav />
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </Frame>
  </Router>
);

export default routes;
