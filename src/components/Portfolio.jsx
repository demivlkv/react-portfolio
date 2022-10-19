import React from 'react';
import Project from './Project';

const Portfolio = () => {
    return (
    <div name="portfolio" className="w-full md:h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <h2 className="text-5xl font-medium inline border-b-4 border-[#d7fbeb]">Works</h2>
                <p className="py-6">Check out some of my recent work.</p>
            </div>

            <Project />

        </div>
    </div>
  );
};

export default Portfolio;