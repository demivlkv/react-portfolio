import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = (props) => {
  const pages = ['home', 'about', 'portfolio', 'contact', 'resume'];
  const { currentPage, setCurrentPage } = props;
  const [nav, setNav] = useState(false);

  // show or hide navbar on click
  const toggleNavbar = () => setNav(!nav);

  return (
    <div>
      {/* NAVBAR AT 768PX & ABOVE */}
      <ul className="hidden font-normal uppercase tracking-wider md:flex">
        {pages.map((page) => (
          <li className={
            props.currentPage.page === page ? 'mx-2 active' : 'mx-2'
            } key={page} >
            <span onClick={() => props.setCurrentPage(page)} className={
              props.currentPage === page ? 'mx-2 active' : 'mx-2 hover:border-b-4 hover:border-[#2e4057] transition-all ease-in duration-300 hover:text-white'
            }>{page}</span>
          </li>
        ))}
      </ul>

      {/* HAMBURGER MENU AT 768PX & LOWER */}
      <div onClick={toggleNavbar} className="md:hidden font-normal uppercase tracking-wider z-50">
        {!nav ? <FiMenu size={30} className="transition-all ease-in duration-300 hover:text-[#79fcca] hover:cursor-pointer" /> : <FiX size={30} className="transition-all ease-in duration-300 hover:text-[#79fcca] hover:cursor-pointer" />}

        <ul className={!nav ? "hidden" : "absolute top-16 left-0 w-full bg-[#242d39] flex flex-col justify-center items-center"}>
          {pages.map((page) => (
            <li onClick={toggleNavbar} className={
              currentPage.page === page ? 'text-[#edf6f9]' : 'my-2 transition-all'
              } key={page} >
            <span onClick={() => props.setCurrentPage(page)} className={
              props.currentPage === page ? 'mx-2 active' : 'mx-2 transition-all ease-in duration-300 hover:border-b-4 hover:border-[#2e4057] hover:text-white'
            }>{page}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navigation;
