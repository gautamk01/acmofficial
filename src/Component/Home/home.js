import About from "../About/About";
import HeadLog from "../HeadLog/HeadLog";
import OurObj from "../OurObjective/OurObj";
import News from "../News/News";
import PEP from "../people/pep";
import Footer from "../FooterComp/Footer"
export default function main_page_component() {
  return (
    <>
      <HeadLog />
      <About />
      <OurObj />
      <PEP />
      <News />
      <Footer/>
    </>
  );
}
