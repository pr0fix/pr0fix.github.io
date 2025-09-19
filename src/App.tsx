import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SectionDivider from "./components/SectionDivider";

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center m-10">
      <div>
        <Navbar />
      </div>
      <div>
        <Introduction />
      </div>
      <SectionDivider title="Projects"/>
      <Projects/>
    </div>
  );
};

export default App;
