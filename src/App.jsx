import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ToolsStrip from "./components/ToolsStrip.jsx";
import Featured from "./components/Featured.jsx";
import Standouts from "./components/Standouts.jsx";
import MoreWork from "./components/MoreWork.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#work">Skip to the work</a>
      <Header />
      <main>
        <Hero />
        <ToolsStrip />
        <Featured />
        <Standouts />
        <MoreWork />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
