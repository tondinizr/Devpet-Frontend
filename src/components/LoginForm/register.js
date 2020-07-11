import React from "react";
import { Redirect } from "react-router-dom";
import loginImg from "../../assets/login.svg";
import api from "../../services/api";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      mail: "",
      password: "",
      userInvalid: false,
    };
  }

  resetForm() {
    this.setState({
      username: "",
      name: "",
      mail: "",
      password: "",
      userInvalid: false,
    });
  }

  resetItem(state, message) {
    this.setState({
      [state]: "",
    });
    window.alert(message);
  }

  async verifyUser() {
    if (!this.state.username) {
      return false;
    }
    try {
      const res = await api
        .post("/username", {
          username: this.state.username,
        })
        .then((resp) => {
          const { data } = resp;
          if (data && data.success) {
            this.setState({
              userInvalid: false,
            });
            return true;
          }
          this.setState({
            userInvalid: true,
            username: "",
          });
          window.alert("Usuário não disponivel");
          return false;
        });
    } catch (e) {
      window.alert(
        `Erro: Não foi possivel se conectar ao banco de dados, por favor tente mais tarde [${e}]`
      );
      return false;
    }
  }

  async verify(component, value) {
    if (component === "username") {
      if (value.lenght > 12) {
        this.setState({
          [component]: "",
        });
        window.alert("O usuario dever ter menos de 12 caracteres!");
      }
    }
  }

  async doReg() {
    await this.verifyUser();
    if (!this.state.username) {
      return;
    }
    if (!this.state.name) {
      return;
    }
    if (!this.state.mail) {
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
        .post("/register", {
          username: this.state.username,
          password: this.state.password,
          name: this.state.name,
          mail: this.state.mail,
        })
        .then((resp) => {
          const { data } = resp;
          if (data && data.success) {
            window.alert(data.msg);
            this.resetForm();
            this.setState({
              isLogginActive: true,
            });
          }
          if (data && data.sucess === false) {
            window.alert(data.msg);
          }
        });
    } catch (e) {
      window.alert(`Erro: { ${e} }`);
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
            <div className="header">Cadastro</div>
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
                    minLength={7}
                    maxLength={12}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome Completo"
                    value={this.state.name ? this.state.name : ""}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={this.state.mail ? this.state.mail : ""}
                    onChange={(e) => this.setState({ mail: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
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
                type="button"
                className="btn"
                onClick={(e) => this.doReg(e)}
              >
                Cadastrar
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
