import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import CV from './components/CV';
import ContentCreator from './components/ContentCreator';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-[#020818] selection:bg-[#00D4FF]/30 selection:text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <CV />
      <ContentCreator />
      <Contact />
      
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}

export default App;