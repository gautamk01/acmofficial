import About from "../About/About";
import HeadLog from "../HeadLog/HeadLog";

import News from "../News/News";
import PEP from "../people/pep";
import FacultyMembers from "../FacultyCard/FacultyMembers";

export default function main_page_component() {
    return (
        <>
            <HeadLog />
            <About />
            {/* <PEP /> */}
            <FacultyMembers />
            <News />
        </>
    );
}
