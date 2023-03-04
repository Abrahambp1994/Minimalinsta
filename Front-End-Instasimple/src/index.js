import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthContextProviderComponent } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProviderComponent>
      <BrowserRouter>
        {" "}
        {/* Constructor para enrrutamiento de las pages */}
        <ModalProvider>
          <App /> {/* Nuestra aplicación */}
        </ModalProvider>
      </BrowserRouter>
    </AuthContextProviderComponent>
  </React.StrictMode>
);
