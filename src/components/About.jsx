import React from 'react';
import { motion } from 'framer-motion';
import Animation from './Animation';
import Avatar from '../assets/it-me.png';

const About = () => {
  return (
    <Animation>
    <div name="about" className="w-full md:h-screen">
        <div className="flex flex-col justify-center items-center py-4 w-full h-full">
            <div className="max-w-screen-lg w-full grid grid-cols-2">
                <div className="sm:text-right pb-8 pl-4">
                    <h2 className="">About</h2>
                </div>
                <div></div>
            </div>
            <div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-8 px-4">
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit="exit"
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mx-auto max-w-lg pt-4 px-6"
                >
                    <img src={Avatar} alt="Demi's Avatar" class="shadow-lg shadow-[#1c2025] rounded opacity-70 grayscale-[100%] transition-all duration-500 hover:opacity-100 hover:grayscale-0" style={{ width: '300px' }} />
                </motion.div>
                <div>
                    <p className="text-2xl text-[#ddd] font-['Source_Code_Pro'] font-medium pb-6">
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
    </Animation>
  );
};

export default About;