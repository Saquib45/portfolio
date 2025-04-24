import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-fira">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}

export default App;