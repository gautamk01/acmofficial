import React from "react";
import Navbar from "./Component/NavBar/navbar";
import Blog from "./Component/Blog/blog";
import About from "./Component/About/About";
import HeadLog from "./Component/HeadLog/HeadLog";

function main_page_component() {
  return (
    <div>
      <HeadLog />
      <About />
    </div>
  );
}

export default function Main() {
  const { rendering_Nav, openBlog } = Navbar();
  return (
    <div>
      {rendering_Nav}
      {openBlog ? <Blog /> : main_page_component()}
    </div>
  );
}
