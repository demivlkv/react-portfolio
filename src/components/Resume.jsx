import React from 'react';
import Animation from './Animation';
import CV from '../assets/CV-Demi-Hayashi.pdf';
import { FiChevronsRight, FiFastForward } from 'react-icons/fi';

const Resume = () => {
    const listIcon = <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#a6ffdd' }} size={15} />;

    return (
        <Animation>
            <div name="resume" className="w-full md:h-screen">
                <div className="flex flex-col justify-center items-center mx-auto py-4 w-full h-full">
                    <div className="max-w-screen-lg w-full grid grid-cols mb-10">
                        <div className="sm:text-center pb-8 pl-4">
                            <h2>Resume</h2>
                            <a href={CV}>
                                <button type="submit" className="group w-[178px] mx-auto my-8 flex items-center pl-6 py-2 border-2 border-gray-300 rounded hover:bg-[#a6ffdd1e] hover:border-[#a6ffdd]">
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
                            <h2>Skills</h2>
                        </div>
                    </div>
                
                    <div className="w-[60%] grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-['Source_Code_Pro'] font-medium block text-[#ddd]">Front-end</h3>
                            {listIcon} ReactJS<br />
                            {listIcon} GatsbyJS<br />
                            {listIcon} JavaScript<br />
                            {listIcon} HTML5<br />
                            {listIcon} CSS3<br />
                            {listIcon} jQuery
                        </div>
                        <div>
                            <h3 className="text-xl font-['Source_Code_Pro'] font-medium block text-[#ddd]">Back-end</h3>
                            {listIcon} NodeJS<br />
                            {listIcon} ExpressJS<br />
                            {listIcon} PWAs<br />
                            {listIcon} REST APIs<br />
                            {listIcon} Sequelize<br />
                            {listIcon} MVC
                        </div>
                        <div>
                            <h3 className="text-xl font-['Source_Code_Pro'] font-medium block text-[#ddd]">Database</h3>
                            {listIcon} MySQL<br />
                            {listIcon} MongoDB
                        </div>
                        <div>
                            <h3 className="text-xl font-['Source_Code_Pro'] font-medium block text-[#ddd]">Tools</h3>
                            {listIcon} Git + GitHub<br />
                            {listIcon} Heroku<br />
                            {listIcon} Chrome Dev Tools<br />
                            {listIcon} Photoshop
                        </div>
                    </div>

                </div>
            </div>
        </Animation>
    );
};

export default Resume;
