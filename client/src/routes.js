import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import FormCadastro from "./pages/FormCadastro";
import FormAtualizar from "./pages/FormAtualizar";
import LeadList from "./pages/LeadList";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form-cadastrar" exact component={FormCadastro} />
        <Route path="/form-atualizar/:idLead" exact component={FormAtualizar} />
        <Route path="/leads" exact component={LeadList} />
      </Switch>
    </BrowserRouter>
  );
}
