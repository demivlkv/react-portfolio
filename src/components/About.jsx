import React from 'react';
import Avatar from '../assets/avatar.png';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1c2541] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-screen-lg w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-medium inline border-b-4 border-[#6fffe9]">About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-screen-lg w-full h-auto grid sm:grid-cols-2 gap-8 px-4">
                <div className="mx-auto max-w-lg pt-4 px-6">
                    <img src={Avatar} alt="Demi's Avatar" class="shadow rounded" style={{ width: '200px' }} />
                </div>
                <div>
                    <p className="text-4xl font-medium pb-6">
                        Nice to meet you, I'm Demi.
                    </p>
                    <p>
                        My interest in coding began back in the early 2000s, when Geocities and MySpace was popular. Back then, I loved to customize my MySpace page with basic HTML, and I was designing & coding websites from scratch with HTML, CSS, & JavaScript. When I'm not coding, I'm most likely traveling the world with my current job as a flight attendant, taking care of my house plants, hiking, watching true-crime documentaries, or learning new languages like Java and Russian. :3
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;