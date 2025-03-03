import React, { useState } from 'react';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen  font-poppins bg-gray-50">
      <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main >
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;