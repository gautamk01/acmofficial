import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeadLog from "./Component/HeadLog/HeadLog";
import Navbar from "./Component/NavBar/navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeadLog />
  </React.StrictMode>
);
