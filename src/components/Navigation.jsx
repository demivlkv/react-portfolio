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

      <ul className="hidden font-['Source_Code_Pro'] md:flex">
        {pages.map((page) => (
          <li className={
            props.currentPage.page === page ? 'mx-2 active font-semibold' : 'mx-2 font-semibold transition-all'
            } key={page} >
            <span onClick={() => props.setCurrentPage(page)} className={
              props.currentPage === page ? 'mx-2 active font-semibold' : 'mx-2 font-medium hover:border-b-4 hover:border-[#6f9283] transition-all hover:text-white'
            }>{page}</span>
          </li>
        ))}
      </ul>

      <div onClick={toggleNavbar} className="md:hidden font-['Source_Code_Pro'] z-50">
        {!nav ? <FiMenu size={30} className="transition-all hover:text-[#f27c61] hover:cursor-pointer" /> : <FiX size={30} className="transition-all hover:text-[#f27c61] hover:cursor-pointer" />}

        <ul className={!nav ? "hidden" : "absolute top-16 left-0 w-full bg-[#2e4057] flex flex-col justify-center items-center"}>
          {pages.map((page) => (
            <li onClick={toggleNavbar} className={
              currentPage.page === page ? 'text-[#edf6f9]' : 'my-2 transition-all'
              } key={page} >
            <span onClick={() => props.setCurrentPage(page)} className={
              props.currentPage === page ? 'mx-2 active font-semibold' : 'mx-2 font-semibold transition-all ease-in hover:border-b-4 hover:border-[#6f9283] hover:text-white'
            }>{page}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navigation;