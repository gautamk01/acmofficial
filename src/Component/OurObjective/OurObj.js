import React from "react";
function OurObj() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-2 content-center p-20 bg-gradient-to-l addedbg2 ">
        <div className="p-20">
          <img src={require("../../assets/amrita-logo.png")} alt="ourobj"></img>
        </div>

        <div className="mt-40 p-10 ">
          <p class="text-4xl font-bold mb-5">Our Objective</p>
          <p className="mb-5">
            The objective of the chapter to promote computer science as a field
            of education and foster a sense of innovation and creativity among
            computer enthusiasts.It's a hub for computer enthusiasts where they
            meet, interact, learn from each other and nurture themselves in the
            process.
          </p>
          <button class="p-3 bg-sky-400 rounded-md text-white text-sm transition ease-in-out hover:scale-105 hover:shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurObj;
