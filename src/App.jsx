import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </Router>
  )
}

export default App