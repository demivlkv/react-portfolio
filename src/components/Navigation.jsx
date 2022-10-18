import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = (props) => {
  const pages = ['home', 'about', 'portfolio', 'contact', 'resume'];
  const { currentPage, setCurrentPage } = props;
  const [nav, setNav] = useState(false);

  // toggle navbar according to screen size
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
        {!nav ? <FiMenu /> : <FiX />}
      </div>


      {/* <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1c2541] flex flex-col justify-center items-center"}>
      {pages.map((page) => (
          <li className={
            props.currentPage.page === page ? 'active' : 'my-2'
            } key={page} >
            <span onClick={() => props.setCurrentPage(page)}>{page}</span>
          </li>
        ))}
      </ul> */}

    </div>
  );
};

export default Navigation;