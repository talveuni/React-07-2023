import React from "react";
import ReactDOM from "react-dom/client";
import './i18n';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import "./index.css"; //can make my own changes, since it's below the Bootstrap import
import { CartSumContextProvider } from "./store/CartSumContect";
import { AuthContextProvider } from "./store/AuthContext";

const rootElement = document.getElementById("root");
if (rootElement === null) throw new Error("Failed to find the root element")
const root = ReactDOM.createRoot(rootElement);root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

