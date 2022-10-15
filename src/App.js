import React from 'react';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;