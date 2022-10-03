import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiOpencollective } from "react-icons/si";
import "./nav.css";
import Logo from "../../img/ACMam.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [closer, setCloser] = useState(false);
  const [openBlog, setopenBlog] = useState(false);
  const [openClub, setopenClub] = useState(false);

  const openBlog_function = () => {
    setopenBlog(!openBlog);
  };

  const openClub_function = () => {
    setopenClub(!openClub);
  };
  const navbar_click = () => {
    setCloser(!closer);
  };

  return (
    <div>
      <div className="flex overflow-hidden justify-between items-center h-[14vh]  mx-auto  px-4 text-black bg-slate-700 bg-color z-10">
        <img src={Logo} alt="something" className=" h-[3.6rem] relative "></img>
        <ul className="hidden md:flex relative">
          <Link to="/acmofficial">
            <li className="p-5 cursor-pointer jump ">Home</li>
          </Link>
          <li className="p-5 cursor-pointer jump">About</li>

          <li className="p-5 cursor-pointer jump " onClick={openClub_function}>
            <Link to="/Club"> Clubs </Link>
          </li>
          <li className=" p-5 cursor-pointer jump " onClick={openBlog_function}>
            <Link to="/blog"> Objective </Link>
          </li>
          <li className=" p-5 cursor-pointer jump">Faculty & Student</li>
          <li className=" p-5 cursor-pointer jump">Events</li>
        </ul>
        <div onClick={navbar_click} className="block md:hidden">
          {!closer ? (
            <SiOpencollective
              size={19}
              className=" ease-out duration-1000 hover:cursor-pointer"
            />
          ) : (
            <AiFillCloseCircle
              size={19}
              className="ease-in-out duration-1000 hover:cursor-pointer"
            />
          )}
        </div>

        <div
          className={
            closer
              ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[white] ease-in-out duration-1000 md:hidden overflow-hidden z-[1]"
              : "fixed left-[-100%] top-0  h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-[2s] md:hidden z-[1]"
          }
        >
          <h1 className="w-full text-[#00df9a] text-3xl font-bold pt-3 ml-3">
            <img src={Logo} alt="something" className=" h-[3.6rem] "></img>
          </h1>
          <ul className=" pt-14 uppercase m-5 ">
            <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
              Home
            </li>
            <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
              Events
            </li>
            <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
              Why joining Us ?
            </li>
            <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
              Clubs
            </li>
            <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
              Blogs
            </li>
            <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
              Sponsors
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
