import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeadLog from "./Component/HeadLog/HeadLog";
import Navbar from "./Component/NavBar/navbar";
import About from "./Component/About/About";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeadLog />
    <About />
  </React.StrictMode>
);
