import './App.css'
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

import Footer from "./component/Footer";


function App() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      </div>
    </>
  );
}

export default App;


