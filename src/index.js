import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Cont">
      <h1>Login</h1>
      <App />
    </div>
  </React.StrictMode>
);

