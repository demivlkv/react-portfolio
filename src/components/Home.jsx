import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1c2541]">
        {/* CONTAINER */}
        <div className="max-w-screen-lg mx-auto px-16 flex flex-col justify-center h-full">
            <p className="text-[#6fffe9]">Hello, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-medium text-[#ccd6f6]">Demi Hayashi</h1>
            <h2 className="text-4xl sm:text-7xl font-medium text-[#8892b0]">A full-stack web developer</h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti dolorem eveniet minus harum culpa debitis in excepturi placeat obcaecati.</p>
            <div>
                <button className="text-white group w-[154px] border-2 rounded pl-6 py-3 my-2 flex items-center hover:bg-[#6fffe92b] hover:border-[#6fffe9]">
                    View Works
                    <span className="group-hover:ml-1 duration-300">
                        <FiChevronsRight className="ml-2" />
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home;