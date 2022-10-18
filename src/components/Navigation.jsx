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
            props.currentPage.page === page ? 'active' : 'mx-2'
            } key={page} >
            <span onClick={() => props.setCurrentPage(page)}>{page}</span>
          </li>
        ))}
      </ul>

      <div onClick={toggleNavbar} className="md:hidden z-10">
        {!nav ? <FiMenu size={30} /> : <FiX size={30} />}

        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1c2541d9] flex flex-col justify-center items-center"}>
          {pages.map((page) => (
            <li onClick={toggleNavbar} className={
              currentPage.page === page ? 'active' : 'my-1'
              } key={page} >
              <span onClick={() => setCurrentPage(page)}>{page}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navigation;