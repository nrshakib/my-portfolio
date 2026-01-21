import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className=" bg-[#1f1f38]">
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
