import React from "react";
// import routes from 'routes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "containers/main";

const routes = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  </>
);

export default routes;
