import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./App";
import "./index.css";
import { UserProvider } from "./hooks/userContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
