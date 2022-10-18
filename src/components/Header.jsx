import React from 'react';
import Navigation from './Navigation';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import Logo from '../assets/logo.png'

const Header = (props) => {
    const { currentPage, setCurrentPage } = props;

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1c2541]">
            <div>
                <a href="/"><img src={Logo} alt="DH Logo" style={{ width: '50px' }} /></a>
            </div>

            <Navigation
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            {/* SOCIAL MEDIA ICONS */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-300 hover:text-[#6fffe9] hover:border-0" href="https://github.com/demivlkv" target="_blank"><FiGithub size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-300 hover:text-[#6fffe9] hover:border-0" href="https://www.linkedin.com/in/demihayashi/" target="_blank"><FiLinkedin size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-300 hover:text-[#6fffe9] hover:border-0" href="https://www.instagram.com/hii.demii/" target="_blank"><FiInstagram size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-300 hover:text-[#6fffe9] hover:border-0" href="mailto:hayashi.demi@gmail.com"><FiMail size={30} /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;