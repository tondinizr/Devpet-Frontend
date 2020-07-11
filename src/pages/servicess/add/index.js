import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import NavBar from "../../../components/Navbar";
import AdicionarServico from "./servicess/index";

export default function AddServices() {
  const [addServico, setAddServico] = useState(false);

  function handleAddServico(add) {
    if (add) setAddServico(false);
    setAddServico(true);
  }

  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "90px",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
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
                height: "300px",
                width: "300px",
                display: "inline-flex",
                flexDirection: "row",
                justifyContent: "center",
                alignSelf: "flex-start",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{ margin: 0, color: "#ffa500", fontWeight: "bolder" }}
              >
                Serviços e Produtos
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                onClick={(addServico) => handleAddServico(addServico)}
              >
                <AddCircleOutlineIcon
                  style={{ width: "45px", color: "#d58300" }}
                />
                <h4 style={{ margin: 0, color: "#d58300" }}>
                  Adicionar um Serviço / Produto
                </h4>
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <EditIcon style={{ width: "45px", color: "#d58300" }} />
                <h4 style={{ margin: 0, color: "#d58300" }}>
                  Alterar um Serviço / Produto
                </h4>
              </div>
              <div
                style={{ margin: 0, color: "#00cdff", fontWeight: "bolder" }}
              >
                Profisionais
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <PersonAddIcon style={{ width: "45px", color: "#00a8d9" }} />
                <h4 style={{ margin: 0, color: "#00a8d9" }}>
                  Adicionar um Profissional
                </h4>
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <EditIcon style={{ width: "45px", color: "#00a8d9" }} />
                <h4 style={{ margin: 0, color: "#00a8d9" }}>
                  Alterar um Profissional
                </h4>
              </div>
            </Typography>
          </Container>
        </div>
        {addServico ? (
          <AdicionarServico style={{ display: "flex" }} />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
