import "./config/ReactotronConfig";
import React from "react";
import Routes from "./services/routes/routes";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }

  render() {
    return <Routes />;
  }
}

export default App;
