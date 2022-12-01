import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import App from "./pages/App";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>
);
