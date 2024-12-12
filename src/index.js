// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
// import "./index.css"; // Optional: You can add custom styles here or import a CSS file

// Rendering the App component inside the root div of your HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
