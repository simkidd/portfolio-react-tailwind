import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  return (
    <Router>
      <ParticlesBackground />
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App