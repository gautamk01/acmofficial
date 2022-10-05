import React from "react";
import Typewriter from "typewriter-effect";
import "./headl.css";
export default function HeadLog() {
  return (
    <>
      <div className="parallax" id="HomeLog">
          <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter)=> {

      typewriter
      
      .typeString("Welcome To ACM")
      .pauseFor(1000)

      .deleteAll()
      .start()
      }}
      />
      </div>
    </>
  );
}
