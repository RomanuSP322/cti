import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter  basename="/cti">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
