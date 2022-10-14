import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1c2541] text-gray-300">
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
      <div className="md:hidden z-10">
        <FiMenu />
      </div>

      {/* MOBILE MENU */}
      <ul className="hidden absolute top-0 left-0 w-full h-screen bg-[#1c2541] flex flex-col justify-center items-center">
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Portfolio</li>
          <li className="py-6 text-4xl">Contact</li>
          <li className="py-6 text-4xl">Resume</li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden"></div>
    </div>
  );
};

export default Nav;