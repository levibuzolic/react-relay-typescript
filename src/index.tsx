import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const el = document.getElementById("root");
if (!el) throw new Error("No #root");
const root = createRoot(el);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
