import React from "react";
import "./news.css";

function NewsCard(props) {
  return (
    <div className="w-full max-w-[300px] flex flex-col gap-2 text-[0.875rem] leading-5">
      <img className="rounded-3xl aspect-square" src={props.img} alt="" />
      <div className="flex font-medium pt-5 gap-6">
        <p className="text-xs text-[#1E1C3199]">{props.date}</p>
        <p className="text-xs text-[#1E1C3199]">{"By " + props.author}</p>
      </div>
      <div className="flex flex-wrap">
        <p className={"description"}>{props.desc}</p>
      </div>
    </div>
  );
}

export default NewsCard;
