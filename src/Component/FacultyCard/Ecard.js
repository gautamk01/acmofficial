import React, { useState } from "react";
import "./Ecard.css";

function Ecard() {
  const [title, setTitle] = useState(false);
  console.log(title);
  return (
    <div className="h-[40%] w-[15%]  m-3  flex flex-wrap justify-center main">
      <div
        className="h-[60%] w-[100%]  funCard  flex flex-wrap justify-center "
        onMouseEnter={() => {
          setTitle(true);
        }}
        onMouseLeave={() => {
          setTitle(false);
        }}
      >
        <div className="img_box"></div>

        <div className="ket text-center">
          <div>
            {" "}
            <h1 className=" font-bold">Gautam Krishna M</h1>
            <h1 className=" font-thin ">Senior Web Developer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecard;
