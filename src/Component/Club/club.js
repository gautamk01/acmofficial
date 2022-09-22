import React, { useState } from "react";
import "./club.css";
import m1 from "../../img/p1.jpg";
import m2 from "../../img/p2.jpeg";
import m3 from "../../img/p3.jpg";
import m4 from "../../img/p4.jpg";
import m5 from "../../img/p5.jpeg";
export default function Club() {
  const image_array = [m1, m2, m3, m4, m5];
  const color_change = [
    "bg-slate-700  ",
    "bg-red-600 ",
    "bg-yellow-600 ",
    "bg-orange-600 ",
    "bg-blue-600 ",
  ];
  const [token, settoken] = useState(0);
  return (
    <div className="main_club flex flex-row h-[86vh] w-[100%] text-white">
      <div
        className={`club_area h-[100%] w-[60%] ${color_change[token]} flex flex-wrap justify-center items-center`}
      >
        <ul>
          <li>
            <a
              href="#d"
              className="club_text text-6xl uppercase "
              onMouseEnter={() => {
                settoken(0);
              }}
            >
              AI
            </a>
          </li>
          <li>
            <a
              href="#fs"
              className="club_text text-6xl uppercase "
              onMouseEnter={() => {
                settoken(1);
              }}
            >
              CP
            </a>
          </li>
          <li>
            <a
              href="#fs"
              className="club_text text-6xl uppercase "
              onMouseEnter={() => {
                settoken(2);
              }}
            >
              WEB
            </a>
          </li>
          <li>
            <a
              href="#fs"
              className="club_text text-6xl uppercase "
              onMouseEnter={() => {
                settoken(3);
              }}
            >
              game
            </a>
          </li>
          <li>
            <a
              href="#fs"
              className="club_text text-6xl uppercase "
              onMouseEnter={() => {
                settoken(4);
              }}
            >
              Cybers
            </a>
          </li>
        </ul>
      </div>
      <div className={`image_area  h-[100%] w-[40%] `}>
        <img
          src={image_array[token]}
          className=" object-cover h-[100%] w-[100%] "
          alt="SOmthing"
        />
      </div>
    </div>
  );
}
