import React from "react";
import NewsCard from "./NewsCard";
import "./news.css";
import icpc_logo from "../../assets/icpc logo.jpg";
import code_drills from "../../assets/codedrills.jpg";

const news = [
  {
    src: icpc_logo,
    desc: "The International Collegiate Programming Contest is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.",
    author: "Admin",
    date: "08 October 2022",
  },
  {
    src: code_drills,
    desc: "We, the ACM Student Chapter at Amritapuri, are glad to announce the launch of a CodeDrills Campus Chapter in our University and its onboarding session on 18th December!",
    author: "Admin",
    date: "18 December 2021 ",
  },
  {
    src: icpc_logo,
    desc: "Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam. Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam",
    author: "Admin",
    date: "09 April 2021 ",
  },
];

function News() {
  return (
    <div
      className=" p-10 font-poppins flex flex-col items-center pt-[110px] addedbg1"
      id="Events"
    >
      <h1 className="font-semibold text-5xl text-center">Read Our News</h1>
      <div className="flex flex-col justify-evenly items-center  w-full gap-16 mt-8 md:flex-row md:items-stretch">
        {news.map((data) => (
          <NewsCard
            img={data.src}
            desc={data.desc}
            author={data.author}
            date={data.date}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
