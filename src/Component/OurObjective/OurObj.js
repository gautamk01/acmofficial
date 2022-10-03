import React from "react";
function OurObj() {
  return (
    <div>        
      <div className="h-[100vh] w-[100%] grid grid-cols-1 md:grid-cols-2 gap-2 content-center justify-items-center font-poppins">
        <img src={require('../../assets/amrita-logo.png')} alt="ourobj" className="hidden md:block h-[25rem] w-[25rem]"></img>
        
        <div className='p-12'>
          <h1 className="font-bold w-[100%] text-6xl">Our Objective</h1>
          <br></br>
          <p className='font-normal text-lg text-slate-400'>The objective of the chapter to promote computer science as a field of education and foster a sense of innovation and creativity among computer enthusiasts.It's a hub for computer enthusiasts where they meet, interact, learn from each other and nurture themselves in the process.</p>
          <br></br>
          <button className="p-3 bg-sky-400 rounded-md text-white text-sm transition ease-in-out hover:scale-105 hover:shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurObj;
