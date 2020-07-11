import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdministrativeRoute from "./AdiministrativeRoute";
import LogReg from "../../components/LoginForm";
import Logout from "../../components/LoginForm/logout";
import Cliente from "../../pages/cliente";
import AddServices from "../../pages/servicess/add";
import Dashboard from "../../pages/dashboard";
import { history } from "../history";

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <AdministrativeRoute exact path="/" component={Dashboard} />
      <AdministrativeRoute exact path="/services/add" component={AddServices} />
      <PrivateRoute exact path="/cliente" component={Cliente} />
      <PrivateRoute
        exact
        path="/user"
        component={() => <h1>Bem vindo {localStorage.name}</h1>}
      />
      <PrivateRoute
        exact
        path="/pets"
        component={() => <h1>Gerenciar os pets do {localStorage.name}</h1>}
      />
      <PrivateRoute
        exact
        path="/addservice"
        component={() => (
          <h1>Adicionar serviços do cliente {localStorage.name}</h1>
        )}
      />
      <PrivateRoute
        exact
        path="/cancelservice"
        component={() => (
          <h1>Cancelar serviços do cliente {localStorage.name}</h1>
        )}
      />
      <Route
        path="/services"
        component={() => <h1>Rota publica: serviços</h1>}
      />
      <Route path="/login" component={LogReg} />
      <Route path="/logout" component={Logout} />

      <Route path="*" component={() => <h1>Not Found</h1>} />
      <PrivateRoute
        exact
        path="/dashboard"
        component={() => <h1>Hello World</h1>}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
