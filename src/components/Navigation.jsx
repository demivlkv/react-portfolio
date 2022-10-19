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

      <ul className="hidden md:flex">
        {pages.map((page) => (
          <li className={
            props.currentPage.page === page ? 'mx-2 active' : 'mx-2 transition-all'
            } key={page} >
            <span onClick={() => props.setCurrentPage(page)} className={
              props.currentPage === page ? 'mx-2 active' : 'mx-2 transition-all hover:text-[#9fdac7]'
            }>{page}</span>
          </li>
        ))}
      </ul>

      <div onClick={toggleNavbar} className="md:hidden z-50">
        {!nav ? <FiMenu size={30} className="transition-all hover:text-[#9fdac7] hover:cursor-pointer" /> : <FiX size={30} className="transition-all hover:text-[#9fdac7] hover:cursor-pointer" />}

        <ul className={!nav ? "hidden" : "absolute top-16 left-0 w-full bg-[#F9faf4] flex flex-col justify-center items-center"}>
          {pages.map((page) => (
            <li onClick={toggleNavbar} className={
              currentPage.page === page ? 'text-[#9fdac7]' : 'my-2 transition-all'
              } key={page} >
            <span onClick={() => props.setCurrentPage(page)} className={
              props.currentPage === page ? 'mx-2 active' : 'mx-2 transition-all hover:text-[#9fdac7]'
            }>{page}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navigation;