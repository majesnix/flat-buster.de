import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Landing from "./views/Landing";
import Pictures from "./views/Pictures";
import Videos from "./views/Videos";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/images" component={Pictures} />
    <Route exact path="/videos" component={Videos} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
