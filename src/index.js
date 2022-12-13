import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
/* import bootstrap to react*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
/* import bootstrap icons to react */
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

/* config axios */
axios.defaults.baseURL = `/api`;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    /*
        the token exists in local storage,
        the user logged in.
        if the token exists then we will add it to header of the request
    */
    config.headers["x-auth-token"] = token;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
