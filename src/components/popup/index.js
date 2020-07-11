import React from "react";
import "./style.css";
import LogReg from "../LoginForm";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <LogReg />
        </div>
      </div>
    );
  }
}

export default Popup;
