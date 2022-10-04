import React, { useState } from "react";
import "./club.css";
import m1 from "../../img/p1.jpg";
import m2 from "../../img/p2.jpeg";
import m3 from "../../img/p3.jpg";
import m4 from "../../img/p4.jpg";
import m5 from "../../img/p5.jpeg";
export default function Club() {
  const image_array = [
    m1,
    m2,
    m3,
    m4,
    m5,
    "https://dt19wmazj2dns.cloudfront.net/wp-content/uploads/2022/05/amrita-admission-amritapuri-campus.jpg",
  ];
  const [token, settoken] = useState(5);
  return (
    <div
      className="main_club flex flex-row h-[86vh] w-[100%] text-white"
      id="Club-page"
    >
      <div className="club_area h-[100%] w-[60%]  flex flex-wrap justify-center items-center  addedbg1 font-poppins">
        <ul>
          <li>
            <a
              href="#d"
              className="club_text text-6xl uppercase "
              onMouseEnter={() => {
                settoken(0);
              }}
              onMouseLeave={() => {
                settoken(5);
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
              onMouseLeave={() => {
                settoken(5);
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
              onMouseLeave={() => {
                settoken(5);
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
              onMouseLeave={() => {
                settoken(5);
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
              onMouseLeave={() => {
                settoken(5);
              }}
            >
              Cybers
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`image_area  h-[100%] w-[40%] flex flex-wrap items-center justify-center addedbg2 `}
      >
        <img
          src={image_array[token]}
          className=" object-cover h-[80%] w-[70%] rounded-lg"
          alt="SOmthing"
        />
      </div>
    </div>
  );
}
