import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./store/Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
