import React from 'react';
import BookNook from '../assets/screenshots/book-nook.png';
import CodeQuiz from '../assets/screenshots/code-quiz.png';
import EmployeeTracker from '../assets/screenshots/employee-tracker.png';
import FindAStory from '../assets/screenshots/find-a-story.png';
import NoteTaker from '../assets/screenshots/note-taker.png';
import ReadmeGen from '../assets/screenshots/readme-generator.png';
import TarotReader from '../assets/screenshots/tarot-reader.png';
import TeamProfileGen from '../assets/screenshots/team-profile-generator.png';
import TechBlog from '../assets/screenshots/tech-blog.png';
import WeatherDash from '../assets/screenshots/weather-dashboard.png';
import { FiGithub, FiLink } from 'react-icons/fi';

const Portfolio = () => {
  return (
    <div name="portfolio" className="w-full md:h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <h2 className="text-4xl font-medium inline border-b-4 border-[#6fffe9]">My Works</h2>
                <p className="py-6">Check out some of my recent work.</p>
            </div>

            {/* GRID CONTAINER */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* CARD ITEM */}
                <div 
                    style={{ backgroundImage: `url(${BookNook})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div"
                >
                    
                    {/* HOVER EFFECTS */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-medium text-white tracking-wider">
                            Book Nook
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiLink size={20} /></button>
                            </a>
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiGithub size={20} /></button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* CARD ITEM */}
                <div 
                    style={{ backgroundImage: `url(${TechBlog})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div"
                >
                    
                    {/* HOVER EFFECTS */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-medium text-white tracking-wider">
                            Tech Blog
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiLink size={20} /></button>
                            </a>
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiGithub size={20} /></button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* CARD ITEM */}
                <div 
                    style={{ backgroundImage: `url(${FindAStory})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div"
                >
                    
                    {/* HOVER EFFECTS */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-medium text-white tracking-wider">
                            Find-A-Story
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiLink size={20} /></button>
                            </a>
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiGithub size={20} /></button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* CARD ITEM */}
                <div 
                    style={{ backgroundImage: `url(${WeatherDash})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div"
                >
                    
                    {/* HOVER EFFECTS */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-medium text-white tracking-wider">
                            Weather Dashboard
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiLink size={20} /></button>
                            </a>
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiGithub size={20} /></button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* CARD ITEM */}
                <div 
                    style={{ backgroundImage: `url(${NoteTaker})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div"
                >
                    
                    {/* HOVER EFFECTS */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-medium text-white tracking-wider">
                            Note Taker
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiLink size={20} /></button>
                            </a>
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiGithub size={20} /></button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* CARD ITEM */}
                <div 
                    style={{ backgroundImage: `url(${EmployeeTracker})` }}
                    className="shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div"
                >
                    
                    {/* HOVER EFFECTS */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-medium text-white tracking-wider">
                            Employee Tracker
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiLink size={20} /></button>
                            </a>
                            <a href="/">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b]"><FiGithub size={20} /></button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  );
};

export default Portfolio;