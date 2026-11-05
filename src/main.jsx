import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { EstateDemo } from "./EstateDemo.jsx";
import { MarketingPage, marketingRoutes } from "./MarketingPages.jsx";
import "./styles.css";
import "./estate-demo.css";

const path = window.location.pathname.replace(/\/$/, "") || "/";
const isMarketingPage = marketingRoutes.includes(path);
document.querySelector(".page-prerender")?.remove();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {window.location.pathname.startsWith("/estate-demo") || window.location.hostname === "aurelia.getvout.com" ? <EstateDemo /> : isMarketingPage ? <MarketingPage path={path} /> : <App />}
  </React.StrictMode>,
);
