import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { EstateDemo } from "./EstateDemo.jsx";
import "./styles.css";
import "./estate-demo.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {window.location.pathname.startsWith("/estate-demo") || window.location.hostname === "aurelia.getvout.com" ? <EstateDemo /> : <App />}
  </React.StrictMode>,
);
