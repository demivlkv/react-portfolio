import React from 'react';
import Animation from './Animation';
import CV from '../assets/CV-Demi-Hayashi.pdf';
import { FiChevronsRight } from 'react-icons/fi';

const Home = () => {
    return (
        <Animation>
            <div name="home" className="w-full h-screen">
                <div className="max-w-screen-lg mx-auto px-16 flex flex-col justify-center h-full">
                    <p className="text-3xl text-[#f27c61] font-['Source_Code_Pro']">Hello, my name is</p>
                    <h1 className="text-5xl sm:text-7xl font-bold text-[#6f9283]">Demi Hayashi</h1>
                    <h1 className="text-5xl sm:text-7xl font-bold text-[#5e7089]">A full-stack web developer</h1>
                    <p className="text-[#8aa2a9] py-4 max-w-[700px]">
                        I am a software engineer with a passion for technologies. I love to build and design things like web applications, <a href="https://www.tokio-ramen.com/" target="_blank" className="home">branding for local businesses</a>, and even <a href="https://cargocollective.com/demihayashi/Propagation" target="_blank" className="home">sculptures</a>.
                    </p>
                    <div>
                        <a href={CV}>
                            <button className="group w-[178px] flex items-center my-2 pl-6 py-2 border-2 border-gray-300 rounded hover:bg-[#f27c611e] hover:border-[#eeb1a3]">
                                Download CV
                                <span className="group-hover:ml-1 duration-300">
                                    <FiChevronsRight className="ml-2" />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default Home;