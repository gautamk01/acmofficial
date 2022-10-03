import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./Ecard.css";

function Ecard(props) {
    const [title, setTitle] = useState(false);

    return (
        <div className="h-[250px] w-[200px]  m-3  main">
            {/* *****************Main div*************** */}
            {/* This Div is the Structure of the Card */}
            {/* Test comment */}
            <div
                className="h-[90%] w-[100%]  funCard  "
                onMouseEnter={() => {
                    setTitle(true);
                }}
                onMouseLeave={() => {
                    setTitle(false);
                }}
            >
                {/* this is the card Section and UseState is Also used */}
                <div
                    className={`img_box bg-[url("https://i.pinimg.com/736x/69/e4/8d/69e48d38b4c6e40aefcc5dfb5e36b7c8.jpg")]`}
                />
                {/* This is the Image inside the funCard */}
                {title && (
                    <div className=" flex justify-self-center mt-[10px] self-center">
                        <a href="http://www.google.com" className=" mr-[10px] ">
                            <BsLinkedin />
                        </a>
                        <a href="http://www.google.com" className=" mr-[10px] ">
                            <BsInstagram />
                        </a>
                        <a href="http://www.google.com" className="">
                            <BsGithub />
                        </a>
                    </div>
                )}
                {/* This the Icon Section of the Card  */}

                <div className="ket text-center">
                    {/* This is where our card Title and */}
                    <div>
                        <h1 className=" mb-1 mt-2 font-bold">{props.Name}</h1>
                        <h1 className=" font-thin text-gray-700 ">
                            {props.designation}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ecard;
