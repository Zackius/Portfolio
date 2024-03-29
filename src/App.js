import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Work from "./components/Work";
import { Navbar } from "./components/Navbar";
import { FaBars, FaTimes } from "react-icons/fa";

const App = () => {
  const [nav, setNav] = useState(true);

  const handleClick = () => setNav(!nav);
  return (
    <div class="flex gap-2">
      <aside class="h-screen flex col-span-1 sticky top-0 ">
        <Navbar handleClick={handleClick} nav={nav} />
      </aside>
      <main class="flex-1 mr-2 overflow-y-hidden bg-gradient-to-r from-white via-blue-300  to-gray-300">
        <Hero  handleClick={handleClick} nav={nav}/>
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
