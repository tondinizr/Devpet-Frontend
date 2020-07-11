import React from "react";
import { Redirect } from "react-router-dom";
import UserStore from "../../stores/UserStore";
import loginImg from "../../assets/login.svg";
import api from "../../services/api";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonDisabled: false,
    };
  }

  resetForm() {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
  }

  async doLogin() {
    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }

    this.setState({
      buttonDisabled: true,
    });
    try {
      const res = await api
        .post("/login", {
          username: this.state.username,
          password: this.state.password,
        })
        .then((resp) => {
          const { data } = resp;
          if (data && data.success) {
            UserStore.loading = false;
            localStorage.setItem("isLoggedIn", true);
            UserStore.isLoggedIn = true;
            localStorage.setItem("username", data.username);
            UserStore.username = data.username;
            localStorage.setItem("name", data.name);
            UserStore.name = data.name;
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.userId);
            UserStore.token = data.token;
            if (data.isAdmin === 1) {
              localStorage.setItem("isAdmin", true);
              UserStore.isAdmin = true;
            } else {
              localStorage.setItem("isAdmin", false);
              UserStore.isAdmin = false;
            }
            UserStore.message = "Usuário Logado";
            this.componentWillUnmount();
          } else if (data && data.sucess === false) {
            this.resetForm();
          }
        });
    } catch (e) {
      UserStore.message = `Erro: { ${e} }`;
      this.resetForm();
    }
  }

  render() {
    return (
      <div>
        {localStorage.isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
              <div className="image">
                <img src={loginImg} />
              </div>
              <div className="form">
                <div className="form-group">
                  <input
                    type="text"
                    name="Usuário"
                    placeholder="Usuário"
                    value={this.state.username ? this.state.username : ""}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="Senha"
                    placeholder="Senha"
                    value={this.state.password ? this.state.password : ""}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="footer">
              <button
                type="submit"
                className="btn"
                disabled={this.state.buttonDisabled}
                onClick={(e) => this.doLogin(e)}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
