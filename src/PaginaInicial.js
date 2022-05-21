import React, { Component, useEffect, useS } from "react";
import axios from "axios";

import Header from "./components/Header.js";

class PaginaInicial extends Component {
  render() {
    const headerText = "The Best Math App";
    const headerHeadline = "Mathematics";

    const TEMAS_URL = "https://hackaton2-api.herokuapp.com/temas";
    const buttonArr = [];
    const promise = axios.get(TEMAS_URL);
    promise.then(({ data }) => {});

    const container = {
      backgroundColor: "var(--roxo-escuro)",
      height: "100vh",
      paddingTop: "2rem",
    };

    return (
      <div style={container}>
        <Header
          buttons={buttonArr}
          headline={headerHeadline}
          text={headerText}
        />
      </div>
    );
  }
}

export default PaginaInicial;
