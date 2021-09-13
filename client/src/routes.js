import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Form from "./pages/Form";
import LeadList from "./pages/LeadList";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" exact component={Form} />
        <Route path="/leads" exact component={LeadList} />
      </Switch>
    </BrowserRouter>
  );
}
