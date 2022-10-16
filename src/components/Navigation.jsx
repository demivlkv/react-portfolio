import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = (props) => {
  const pages = ['home', 'about', 'portfolio', 'contact', 'resume'];
  const [nav, setNav, currentPage, setCurrentPage] = useState(false);

  // toggle navbar according to screen size
  const toggleNavbar = () => setNav(!nav);

  return (
    <div>

      <ul className="hidden md:flex">
        {pages.map((page) => (
          <li className={`mx-1" ${
            currentPage.page === page && 'active'
            }`} key={page} >
            <a href="#" onClick={() => setCurrentPage(page)}>{page}</a>
          </li>
        ))}
      </ul>


      <div onClick={toggleNavbar} className="md:hidden z-10">
        {!nav ? <FiMenu /> : <FiX />}
      </div>


      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1c2541] flex flex-col justify-center items-center"}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Portfolio</li>
          <li className="py-6 text-4xl">Contact</li>
          <li className="py-6 text-4xl">Resume</li>
      </ul>

    </div>
  );
};

export default Navigation;