import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PetsIcon from "@material-ui/icons/Pets";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../../../assets/Logo.png";

const ITEM_HEIGHT = 55;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AdmNav() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={classes.root}
      style={{ position: "fixed", top: 0, left: 0, right: "0" }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "42ch",
              },
            }}
          >
            <MenuItem>
              <div style={{ display: "flex" }}>
                <Link
                  to="/user"
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                    display: "flex",
                  }}
                >
                  <AccountBoxIcon style={{ paddingTop: "5px" }} />
                  <Typography variant="h6">
                    {" "}
                    &nbsp; &nbsp; Minha Conta
                  </Typography>
                </Link>
              </div>
            </MenuItem>
            <MenuItem>
              <div style={{ display: "flex" }}>
                <Link
                  to="/pets"
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                    display: "flex",
                  }}
                >
                  <PetsIcon style={{ paddingTop: "5px" }} />
                  <Typography variant="h6"> &nbsp; &nbsp; Meus Pets</Typography>
                </Link>
              </div>
            </MenuItem>
            <MenuItem>
              <div style={{ display: "flex" }}>
                <Link
                  to="/addservice"
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                    display: "flex",
                  }}
                >
                  <AddCircleIcon style={{ paddingTop: "5px" }} />
                  <Typography variant="h6">
                    {" "}
                    &nbsp; &nbsp; Agendar Procedimento
                  </Typography>
                </Link>
              </div>
            </MenuItem>
            <MenuItem>
              <div style={{ display: "flex" }}>
                <Link
                  to="/cancelservice"
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                    display: "flex",
                  }}
                >
                  <CancelIcon style={{ paddingTop: "5px" }} />
                  <Typography variant="h6">
                    {" "}
                    &nbsp; &nbsp; Cancelar Procedimento
                  </Typography>
                </Link>
              </div>
            </MenuItem>
            <MenuItem>
              <div style={{ display: "flex" }}>
                <Link
                  to="/services"
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                    display: "flex",
                  }}
                >
                  <SearchIcon style={{ paddingTop: "5px" }} />
                  <Typography variant="h6">
                    {" "}
                    &nbsp; &nbsp; Visualizar Serviços Disponíveis
                  </Typography>
                </Link>
              </div>
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img
                src={Logo}
                alt="devPet"
                style={{
                  width: "150px",
                  paddingTop: "10px",
                }}
              />
            </Link>
          </Typography>
          <Link
            to="/logout"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div style={{ display: "flex" }}>
              <Typography variant="h6">Logout &nbsp;</Typography>
              <ExitToAppIcon style={{ paddingTop: "4px" }} />
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
