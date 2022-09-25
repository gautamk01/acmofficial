import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./Ecard.css";

function Ecard() {
  const [title, setTitle] = useState(false);
  console.log(title);
  return (
    <div className="h-[250px] w-[200px]  m-3  main">
      <div
        className="h-[90%] w-[100%]  funCard  "
        onMouseEnter={() => {
          setTitle(true);
        }}
        onMouseLeave={() => {
          setTitle(false);
        }}
      >
        <div className="img_box" />
        {title && (
          <div className=" flex justify-self-center mt-[10px] self-center">
            <a href="http://www.google.com" className=" mr-[10px] ">
              <BsLinkedin />
            </a>
            <a href="http://www.google.com" className=" mr-[10px] ">
              <BsInstagram />
            </a>
            <a href="http://www.google.com" className="">
              <BsGithub />
            </a>
          </div>
        )}
        <div className="ket text-center">
          <div>
            <h1 className=" mb-1 mt-2 font-bold">Gautam Krishna M</h1>
            <h1 className=" font-thin ">Senior Web Developer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecard;
