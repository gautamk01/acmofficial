import React from "react";
import FacultyMembersData from "./FacultyCardData";
import Ecard from "./Ecard";
import "./faculty.css";

export default function FacultyMembers() {
  const facultyCards = FacultyMembersData.map((itm, index) => {
    return (
      <div className={`ECA${itm.id}`}>
        <Ecard
          Name={itm.name}
          designation={itm.position}
          image={itm.imageLink}
          key={`${index}`}
        />
      </div>
    );
  });

  return (
    <div
      className="faculty-page h-[100vh] w-[100%]
    p-30 box-border flex flex-wrap flex-column items-center justify-center"
    >
      <p className="faculty-title mt-[5vh] mb-[4vh]">Faculty Management</p>
      <div className="parent">{facultyCards}</div>
    </div>
  );
}
