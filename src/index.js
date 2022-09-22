import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./main";
import { BrowserRouter } from "react-router-dom"; // For Routing purpose
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// import Main from "./main";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>
// );
