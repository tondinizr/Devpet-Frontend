import React, { Component } from "react";
import { observer } from "mobx-react";
import UserStore from "./stores/UserStore";
import { Login, Register } from "./components/login/index";
import SubmitButton from "./components/LoginForm/SubmitButton";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    try {
      const res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
        UserStore.name = result.name;
        UserStore.token = result.token;
        UserStore.message = "Usuário Logado";
      } else {
        UserStore.loading = true;
        UserStore.isLoggedIn = false;
        UserStore.username = "";
        UserStore.name = "";
        UserStore.token = "";
        UserStore.message = "Usuário Não Logado";
      }
    } catch (e) {
      UserStore.loading = true;
      UserStore.isLoggedIn = false;
      UserStore.username = "";
      UserStore.name = "";
      UserStore.token = "";
      UserStore.message = `Erro: { ${e} }`;
    }
  }

  async doLogout() {
    try {
      const res = await fetch("/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
        UserStore.name = "";
        UserStore.token = "";
        UserStore.message = "Logout efetuado com sucesso";
      }
    } catch (e) {
      UserStore.message = `Erro: { ${e} }`;
    }
  }

  render() {
    if (!UserStore.loading) {
      return (
        <div className="app">
          <div className="container">Carregando, por favor aguarde</div>
          <div className="throbber-loader">loading</div>
        </div>
      );
    }
    if (UserStore.isLoggedIn) {
      return (
        <div className="app">
          <div className="container">
            Olá {UserStore.name}!
            <br />
            <div className="heartbeat-loader" />
            <br />O que deseja fazer hoje?
          </div>
          <SubmitButton
            text="LogOut"
            disabled={false}
            onClicked={() => this.doLogout()}
          />
        </div>
      );
    }
    return (
      <div className="app">
        <LoginForm />
      </div>
    );
  }
}

export default observer(App);
