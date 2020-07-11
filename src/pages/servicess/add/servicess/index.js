import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "../style.scss";

export default class AdicionarServico extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      productCode: "",
      codeBar: "",
      type: "produto",
      value: 0,
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "90px",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexGrow: 6,
          flexBasis: 6,
        }}
      >
        <CssBaseline
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            alignItems: "flex-start",
          }}
        />
        <Container
          maxWidth="sm"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            component="div"
            style={{
              backgroundColor: "#f2f2f2",
              display: "inline-flex",
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "flex-start",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            className="base-container"
          >
            <div className="flex" style={{ alignSelf: "center" }}>
              <div
                className="header"
                style={{
                  width: "100%",
                  flexFlow: "center",
                  paddingTop: "15px",
                }}
              >
                Cadastro de Produto / Serviço
              </div>
            </div>
            <div className="contentPd">
              <div className="formPd">
                <div className="flex">
                  <div
                    className="form-group"
                    style={{
                      alignSelf: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <input
                      type="number"
                      name="codeproduct"
                      placeholder="Codigo interno"
                      value={
                        this.state.productCode ? this.state.productCode : ""
                      }
                      onChange={(e) =>
                        this.setState({ productCode: e.target.value })
                      }
                      style={{ width: "130px", backgroundColor: "#fff" }}
                      className="pd"
                    />

                    <input
                      type="text"
                      name="product"
                      placeholder="Nome do Produto"
                      value={this.state.product ? this.state.product : ""}
                      onChange={(e) =>
                        this.setState({ product: e.target.value })
                      }
                      style={{ backgroundColor: "#fff", width: "300px" }}
                      className="pd"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div
                    className="form-group"
                    style={{
                      alignSelf: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <select
                      name="select"
                      className="pd"
                      style={{ width: "fit-content", backgroundColor: "#fff" }}
                      value={this.state.type ? this.state.type : ""}
                      onChange={(e) => this.setState({ type: e.target.value })}
                    >
                      <option value="produto">Produto</option>
                      <option value="serviço">Serviço</option>
                    </select>
                    {this.state.type === "serviço" ? (
                      ""
                    ) : (
                      <input
                        type="text"
                        name="codeproduct"
                        placeholder="Codigo de Barras"
                        value={this.state.codeBar ? this.state.codeBar : ""}
                        onChange={(e) =>
                          this.setState({ codeBar: e.target.value })
                        }
                        maxLength={12}
                        style={{
                          width: "fit-content",
                          backgroundColor: "#fff",
                        }}
                        className="pd"
                      />
                    )}
                    <input
                      type="text"
                      name="value"
                      placeholder="Valor (R$ 0,00)"
                      value={this.state.value ? this.state.value : ""}
                      onChange={(e) => this.setState({ value: e.target.value })}
                      style={{ backgroundColor: "#fff", width: "120px" }}
                      className="pd"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Container>
      </div>
    );
  }
}
