import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <HashRouter  basename="/cti">
    {/* <ScrollToTop /> */}
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
