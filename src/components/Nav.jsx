import React, { useState } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import Logo from '../assets/logo.png'

const Nav = () => {
  // toggle navbar
  const [nav, setNav] = useState(false);
  const toggleNavbar = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4">
      <div>
        <a href="/"><img src={Logo} alt="DH Logo" style={{ width: '50px' }} /></a>
      </div>

      {/* MAIN MENU */}
      <ul className="hidden md:flex">
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>

      {/* HAMBURGER MENU */}
      <div onClick={toggleNavbar} className="md:hidden z-10">
        {!nav ? <FiMenu /> : <FiX />}
      </div>

      {/* MOBILE MENU */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1c2541] flex flex-col justify-center items-center"}>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Portfolio</li>
          <li className="py-6 text-4xl">Contact</li>
          <li className="py-6 text-4xl">Resume</li>
      </ul>

      {/* SOCIAL ICONS */}
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

export default Nav;