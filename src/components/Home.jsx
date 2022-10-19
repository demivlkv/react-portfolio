import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen">
            <div className="max-w-screen-lg mx-auto px-16 flex flex-col justify-center h-full">
                <p className="text-3xl text-[#94b0b3]">Hello, my name is</p>
                <h1 className="text-5xl sm:text-7xl font-medium text-[#9fdac7]">Demi Hayashi</h1>
                <h2 className="text-5xl sm:text-7xl font-medium text-[#a5bdc0]">I'm a full-stack web developer</h2>
                <p className="text-[#94b0b3] py-4 max-w-[700px]">
                    I am a software engineer with a passion for technologies. I love to build and design things like web applications, <a href="https://www.tokio-ramen.com/" target="_blank" className="home">branding for local businesses</a>, and even <a href="https://cargocollective.com/demihayashi/Propagation" target="_blank" className="home">sculptures</a>.
                </p>
                <div>
                    <button onclick="window.location('')" className="text-[#84d5bc] group w-[170px] border-2 rounded pl-6 py-2 my-2 flex items-center hover:bg-[#84d5bb2f] hover:text-[#94b0b3] hover:border-[#c1e2d8] hover:transition-all">
                        Download CV
                        <span className="group-hover:ml-1 duration-300">
                            <FiChevronsRight className="ml-2" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;