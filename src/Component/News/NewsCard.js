import React from 'react';
import './news.css'

function NewsCard(props) {
    return (
        <div className="news-card">
            <img className="rounded-3xl  w-[250px]" src={props.img} alt=""/>
            <div className="flex font-medium pt-5 gap-6"><p className="text-xs text-[#1E1C3199]"> 09 April 2022 </p><p className="text-xs text-[#1E1C3199]">by Admin</p></div>
            <div className="flex flex-wrap"><p>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </p></div>
            <span className="text-[#4270EC] pt-2">Read More</span>
        </div>
    );
}

export default NewsCard;