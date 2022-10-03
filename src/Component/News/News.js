import React from "react";
import NewsCard from "./NewsCard";
import "./news.css";
import Rectangle6 from "../../assets/Rectangle 6.png";
import Rectangle7 from "../../assets/Rectangle 7.png";
import Rectangle8 from "../../assets/Rectangle 8.png";

function News() {
  return (
    <div className=" p-10 font-poppins flex flex-col items-center addedbg2">
      <h1 className="font-semibold text-5xl text-center">Read Our News</h1>
      <div className="news-container">
        <NewsCard img={Rectangle6} />
        <NewsCard img={Rectangle7} />
        <NewsCard img={Rectangle8} />
      </div>
    </div>
  );
}

export default News;
