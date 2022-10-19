import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  // renders page accordingly via switch statement
  const renderPage = () => {
    switch (currentPage) {
        case 'home':
            return <Home />;
        case 'about':
            return <About />;
        case 'portfolio':
            return <Portfolio />;
        case 'contact':
            return <Contact />;
        case 'resume':
            return <Resume />
        default:
            return <About />;
    };
  };

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;