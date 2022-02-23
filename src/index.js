import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import withReduxFeatures from "./setup/redux/withReduxFeatures";
import App from "./App";
import * as serviceWorker from "./setup/redux/serviceWorker";


/** Wrap App component with store providers */
const WrappedApp = withReduxFeatures(App);

ReactDOM.render(
  <Router>
    <WrappedApp />
  </Router>,
  document.getElementById("root")
);

/**
 * If you want your app to work offline and load faster,
 * you can change unregister() to register() below.
 * Note this comes with some pitfalls.
 * @see https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
