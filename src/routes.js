import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Quote from "./components/Quote";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Admin} path="/admin" />
    <Route component={Quote} path="/quote"/>
  </Switch>
);