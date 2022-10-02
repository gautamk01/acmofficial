import React from "react";
import FacultyMembersData from "./FacultyCardData";
import Ecard from "./Ecard";
import "./faculty.css";

export default function FacultyMembers() {
    const facultyCards = FacultyMembersData.map((itm) => {
        return (
            <div className={`card-${itm.id}`}>
                <Ecard
                    Name={itm.name}
                    designation={itm.position}
                    image={itm.imageLink}
                    key={itm.id}
                />
            </div>
        );
    });

    return (
        <div className="faculty-page h-[100vh] p-0">
            <p className="faculty-title mt-[5vh]">Faculty Management</p>
            <div className="p-0 h-[50%] mr-0 ml-[15vw] mt-[10vh] grid grid-cols-3 grid-rows-2 gap-y-[15vh]">
                {facultyCards}
            </div>
        </div>
    );
}
