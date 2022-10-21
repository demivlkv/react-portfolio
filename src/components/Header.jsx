import React from 'react';
import Navigation from './Navigation';
import Logo from '../assets/logo.png';

const Header = (props) => {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav className="mb-[70px]">
            <div className="fixed top-0 z-50 w-full flex justify-between items-center p-4 bg-[#2e4057]">
                <div>
                    <a href="/"><img src={Logo} alt="DH Logo" style={{ width: '50px' }} /></a>
                </div>

                <Navigation
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </nav>
    );
};

export default Header;