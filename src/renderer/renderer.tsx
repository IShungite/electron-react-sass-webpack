import React from "react";
import ReactDOM from "react-dom";
import App from "@components/App/App";

import "./renderer.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);