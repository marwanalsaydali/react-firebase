import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import StoreSelector from "../components/storeSelector";
import NotFound from "../pages/404";
const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StoreSelector} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;
