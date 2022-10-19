import React from 'react';
import Navigation from './Navigation';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import Logo from '../assets/logo.png';

const Header = (props) => {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav className="mb-[70px]">
            <div className="fixed top-0 z-50 w-full flex justify-between items-center p-4 bg-[#F9faf4]">
                <div>
                    <a href="/"><img src={Logo} alt="DH Logo" style={{ width: '50px' }} /></a>
                </div>

                <Navigation
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-[#94b0b3] hover:text-[#9fdac7] hover:border-0" href="https://github.com/demivlkv" target="_blank"><FiGithub size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-[#94b0b3] hover:text-[#9fdac7] hover:border-0" href="https://www.linkedin.com/in/demihayashi/" target="_blank"><FiLinkedin size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-[#94b0b3] hover:text-[#9fdac7] hover:border-0" href="https://www.instagram.com/hii.demii/" target="_blank"><FiInstagram size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-[#94b0b3] hover:text-[#9fdac7] hover:border-0" href="mailto:hayashi.demi@gmail.com"><FiMail size={30} /></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;