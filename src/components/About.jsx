import React from 'react';
import Avatar from '../assets/avatar.png';

const About = () => {
  return (
    <div name="about" className="w-full md:h-screen">
        <div className="flex flex-col justify-center items-center py-4 w-full h-full">
            <div className="max-w-screen-lg w-full grid grid-cols-2">
                <div className="sm:text-right pb-8 pl-4">
                    <h2 className="text-5xl font-medium inline border-b-4 border-[#6fffe9]">About</h2>
                </div>
                <div></div>
            </div>
            <div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-8 px-4">
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
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;