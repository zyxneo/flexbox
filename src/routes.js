import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="/about" component={AboutPage}/>
  </Route>
)
