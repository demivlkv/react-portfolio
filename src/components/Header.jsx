import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Logo from '../assets/logo.png';

const Header = (props) => {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav className="mb-[70px]">
            <div className="fixed top-0 z-50 w-full flex justify-between items-center p-4 bg-[#2e4057]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit="exit"
                    transition={{ duration: 1 }}
                >
                    <a href="/"><img src={Logo} alt="DH Logo" style={{ width: '50px' }} /></a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit="exit"
                    transition={{ duration: 1 }}
                >
                    <Navigation
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </motion.div>
            </div>
        </nav>
    );
};

export default Header;