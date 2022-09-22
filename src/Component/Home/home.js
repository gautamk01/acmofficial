import About from "../About/About";
import HeadLog from "../HeadLog/HeadLog";
import News from "../News/News";

export default function main_page_component() {
  return (
    <div>
      <HeadLog />
      <About />
      <News/>
    </div>
  );
}
