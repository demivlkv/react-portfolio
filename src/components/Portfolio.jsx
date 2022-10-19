import React from 'react';
import Project from './Project';

const Portfolio = () => {
    return (
    <div name="portfolio" className="w-full md:h-full">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full z-0">

            <div className="mb-8">
                <h2 className="text-5xl font-medium inline border-b-4 border-[#d7fbeb]">Works</h2>
            </div>

            <Project />

        </div>
    </div>
  );
};

export default Portfolio;