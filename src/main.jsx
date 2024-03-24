import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./App";
import "./index.css";
import { createContext } from "react";
import { UserProvider } from "./hooks/userContext";

const contextValue = {
  username: "Mango",
  isLoggedIn: true,
};

export const myContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
