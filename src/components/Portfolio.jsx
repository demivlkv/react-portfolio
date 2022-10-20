import React from 'react';
import Project from './Project';

const Portfolio = () => {
    return (
    <div name="portfolio" className="w-full md:h-full">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full z-0">
            <div className="max-w-screen-lg w-full grid grid-cols-2">
                <div className="sm:text-right mb-8 px-4">
                    <h2 className="">Works</h2>
                </div>
                <div></div>
            </div>

            <Project />

        </div>
    </div>
  );
};

export default Portfolio;