import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./store/Store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
