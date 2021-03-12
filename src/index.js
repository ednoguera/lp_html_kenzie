import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TagManager from "react-gtm-module";

import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const tagManagerArgs = {
  gtmId: "GTM-NB5L2PM",
  dataLayer: []
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App dataLayer={tagManagerArgs.dataLayer} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
