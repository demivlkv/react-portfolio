import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Navigation from './Navigation';
import Logo from '../assets/logo.png';

const Header = () => {
    const [ currentPage, setCurrentPage ] = useState('about');

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
            {/* NAVIGATION BAR */}
            <nav className="mb-[70px]">
                <div className="fixed top-0 z-50 w-full flex justify-between items-center p-4 bg-[#2e4057]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit="exit"
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <a href="/"><img src={Logo} alt="DH Logo" style={{ width: '50px' }} /></a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit="exit"
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <Navigation
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />

                    </motion.div>
                </div>
            </nav>

            {/* RENDER THE PAGE ACCORDING TO `currentPage` */}
            <main>
                {renderPage(currentPage)}
            </main>
        </div>
    );
};

export default Header;