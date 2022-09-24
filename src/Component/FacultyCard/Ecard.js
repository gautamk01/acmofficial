import React from "react";
import "./Ecard.css";

function Ecard() {
  return (
    <div className="fun_card flex flex-wrap item-center justify-center overflow-hidden h-[15%] w-[15%] bg-emerald-500 m-1 rounded-lg duration-200 ">
      <div className="img_box "></div>
      <div className="">
        <h1>Gautam Krishna M</h1>
        <h5>Senior WEB Developer</h5>
      </div>
    </div>
  );
}

export default Ecard;
