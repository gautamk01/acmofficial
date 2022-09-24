import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./Ecard.css";

function Ecard() {
  const [title, setTitle] = useState(false);
  console.log(title);
  return (
    <div className="h-[35%] w-[15%]  m-3   justify-center main">
      <div
        className="h-[60%] w-[100%]  funCard  flex flex-wrap  justify-center "
        onMouseEnter={() => {
          setTitle(true);
        }}
        onMouseLeave={() => {
          setTitle(false);
        }}
      >
        <div className="img_box ">
          {title && (
            <div className="relative top-[7.3rem] left-[10px] flex ">
              <a href="http://www.google.com" className=" ml-6">
                <BsLinkedin />
              </a>
              <a href="http://www.google.com" className="ml-6 ">
                <BsInstagram />
              </a>
              <a href="http://www.google.com" className="ml-6">
                <BsGithub />
              </a>
            </div>
          )}
        </div>

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
