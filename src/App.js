import React from 'react';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;