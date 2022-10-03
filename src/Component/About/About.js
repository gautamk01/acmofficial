import React from "react";
import Carousel from "./Carousel.js";
import "./about.css";

function About() {
  return (
    <div
      id="AboutUs"
      className="h-[100vh] w-[100%] gridStyle addedbg1  font-poppins"
    >
      <div
        id="details-AboutUs"
        className="flex-col pl-2 w-[80%] About space-y-5"
      >
        <p className="ml-3">CREATIVE MIND, CREATIVE WORK</p>
        <h1 className="text-6xl font-bold">About Our Chapter</h1>
        <p className="text-slate-400">
          Amrita ACM Student Chapter in Amritapuri is striving to conduct varied
          events for the student community of our university to enhance the
          coding skills, creative skills and other required skills needed for
          their employment and growth. Encouraging students to take an active
          interest in the emerging and exciting world of computing preparations
          and presentations of the technical reports and papers,and cooperative
          efforts on research projects allow students to test their technical
          expertise.
        </p>
        <button className="p-3 bg-sky-400 rounded-md text-white text-sm transition ease-in-out hover:scale-105 hover:shadow-md">
          Get in Touch
        </button>
      </div>
      <Carousel className="Carousel" />
    </div>
  );
}

export default About;
