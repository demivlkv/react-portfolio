import React from 'react';
import Avatar from '../assets/avatar.png';
import { FiFastForward } from 'react-icons/fi';

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-screen-lg w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-5xl font-medium inline border-b-4 border-[#6fffe9]">About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-screen-lg w-full h-auto grid sm:grid-cols-2 gap-8 px-4">
                <div className="mx-auto max-w-lg pt-4 px-6">
                    <img src={Avatar} alt="Demi's Avatar" class="shadow rounded" style={{ width: '240px' }} />
                </div>
                <div>
                    <p className="text-4xl text-[#8892b0] font-medium pb-6">
                        Nice to meet you, I'm Demi.
                    </p>
                    <p className="pb-6">
                        My interest in coding began back in the early 2000s, when Geocities and MySpace were popular. I never thought that customizing a MySpace page would lead to teaching myself HTML, CSS, JavaScript, PHP, and b2/WordPress/Greymatter just to put together a blog.
                    </p>
                    <p className="pb-6">
                        When I'm not coding, I'm most likely traveling the world with my current job as a flight attendant, taking care of my house plants, hiking, watching true-crime documentaries, or learning new languages like Java and Russian. :3
                    </p>
                    <h2 className="text-2xl font-medium pb-4">My Technical Skills:</h2>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div>
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> HTML5<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> CSS3<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> JavaScript<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> jQuery
                        </div>
                        <div>
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> React<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> Node.js<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> SQL & NoSQL<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> Bootstrap
                        </div>
                        <div>
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> Git/GitHub<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> Heroku<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> Photoshop<br />
                            <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} /> InDesign
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;