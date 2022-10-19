import React from 'react';
import { FiChevronsRight, FiFastForward } from 'react-icons/fi';

const Resume = () => {
    const listIcon = <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#9fdac7' }} size={15} />;

    return (
        <div name="resume" className="w-full md:h-screen">
            <div className="flex flex-col justify-center items-center mx-auto py-4 w-full h-full">
                <div className="max-w-screen-lg w-full grid grid-cols mb-10">
                    <div className="sm:text-center pb-8 pl-4">
                        <h2 className="text-5xl font-medium inline border-b-4 border-[#d7fbeb]">CV</h2>
                        <a href="/">
                            <button type="submit" className="text-[#84d5bc] group w-[170px] border-2 rounded mx-auto my-8 pl-6 py-2 flex items-center hover:bg-[#84d5bb2f] hover:text-[#94b0b3] hover:border-[#c1e2d8] transition-all">
                                Download CV
                                <span className="group-hover:ml-1 duration-300">
                                    <FiChevronsRight className="ml-2" />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="max-w-screen-lg w-full grid grid-cols">
                    <div className="sm:text-center pb-8 pl-4">
                        <h2 className="text-5xl font-medium inline border-b-4 border-[#d7fbeb]">Skills</h2>
                    </div>
                </div>
            
                <div className="w-[60%] grid grid-cols-2 sm:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-medium block text-[#94b0b3]">Front-end</h3>
                        {listIcon} ReactJS<br />
                        {listIcon} JavaScript<br />
                        {listIcon} HTML5<br />
                        {listIcon} CSS3<br />
                        {listIcon} Bootstrap<br />
                        {listIcon} jQuery
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium block text-[#94b0b3]">Back-end</h3>
                        {listIcon} NodeJS<br />
                        {listIcon} ExpressJS<br />
                        {listIcon} PWAs<br />
                        {listIcon} RESTful APIs<br />
                        {listIcon} Sequelize<br />
                        {listIcon} MVC
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium block text-[#94b0b3]">Database</h3>
                        {listIcon} MySQL<br />
                        {listIcon} MongoDB
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium block text-[#94b0b3]">Tools</h3>
                        {listIcon} Git + GitHub<br />
                        {listIcon} Heroku<br />
                        {listIcon} Chrome Dev Tools<br />
                        {listIcon} Photoshop
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;