import React from "react";
import Navbar from "./Component/NavBar/navbar";
import Blog from "./Component/Blog/blog";
import Home from "./Component/Home/home";
import Club from "./Component/Club/club";
import About from "./Component/About/About";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acmofficial" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/about" element={About} />
        </Routes>
      </div>
    </div>
  );
}
