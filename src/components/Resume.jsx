import React from 'react';
import { FiChevronsRight, FiFastForward } from 'react-icons/fi';

const Resume = () => {
    const listIcon = <FiFastForward className="inline-flex justify-center items-center pb-1" style={{ color: '#6fffe9' }} size={15} />;

    return (
        <div name="resume" className="w-full md:h-screen">
            <div className="flex flex-col justify-center items-center py-4 w-full h-full">
                <div className="max-w-screen-lg w-full grid grid-cols-2 mb-10">
                    <div className="sm:text-right pb-8 pl-4">
                        <h2 className="text-5xl font-medium inline border-b-4 border-[#6fffe9]">CV</h2>
                    </div>
                    <div>
                        <button type="submit" className="text-[white] group w-[170px] border-2 rounded mx-auto my-2 pl-6 py-2 flex items-center hover:bg-[#6fffe92b] hover:text-[#6fffe9] hover:border-[#bbf7ee] hover:transition-all">
                            Download CV
                            <span className="group-hover:ml-1 duration-300">
                                <FiChevronsRight className="ml-2" />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="max-w-screen-lg w-full grid grid-cols-2">
                    <div className="sm:text-right pb-8 pl-4">
                        <h2 className="text-5xl font-medium inline border-b-4 border-[#6fffe9]">Skills</h2>
                    </div>
                </div>
            
                <div className="w-[60%] grid grid-cols-2 sm:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-medium block text-slate-400">Front-end</h3>
                        {listIcon} ReactJS<br />
                        {listIcon} JavaScript<br />
                        {listIcon} jQuery<br />
                        {listIcon} HTML5<br />
                        {listIcon} CSS3<br />
                        {listIcon} Bootstrap
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium block text-slate-400">Back-end</h3>
                        {listIcon} NodeJS<br />
                        {listIcon} ExpressJS<br />
                        {listIcon} PWAs<br />
                        {listIcon} RESTful APIs<br />
                        {listIcon} ExpressJS<br />
                        {listIcon} Sequelize<br />
                        
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium block text-slate-400">Database</h3>
                        {listIcon} MySQL<br />
                        {listIcon} MongoDB
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium block text-slate-400">Tools</h3>
                        {listIcon} Git/GitHub<br />
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