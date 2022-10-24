import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Book Nook',
        thumbnail: '/images/book-nook.png',
        description: 'A collaborative effort to provide a platform for all parents to discuss books for their young readers',
        technologies: 'JavaScript / NodeJS / MySQL',
        url: 'https://booknook-stars.herokuapp.com/',
        github: 'https://github.com/demivlkv/book-nook'
    },
    {
        title: 'Tech Blog',
        thumbnail: '/images/tech-blog.png',
        description: 'A full-stack CMS-style blog site where users can create an account, publish articles, blog posts, & thoughts',
        technologies: 'JavaScript / NodeJS / MySQL',
        url: 'https://frozen-sierra-30429.herokuapp.com/',
        github: 'https://github.com/demivlkv/tech-blog'
    },
    {
        title: 'Find-A-Story',
        thumbnail: '/images/find-a-story.png',
        description: 'A collaborative project to develop a media database application using the Open Movie Database API & Google Books API',
        technologies: 'JavaScript / jQuery /  HTML / CSS',
        url: 'https://demivlkv.github.io/Find-A-Story',
        github: 'https://github.com/demivlkv/Find-A-Story'
    },
    {
        title: 'Weather Dashboard',
        thumbnail: '/images/weather-dashboard.png',
        description: 'A weather dashboard application built with OpenWeather API',
        technologies: 'JavaScript / HTML / Bootstrap',
        url: 'https://demivlkv.github.io/weather-dashboard',
        github: 'https://github.com/demivlkv/weather-dashboard'
    },
    {
        title: 'Note Taker',
        thumbnail: '/images/note-taker.png',
        description: 'A simple note-taking application with the ability to create, save, update, and delete notes',
        technologies: 'JavaScript / NodeJS / ExpressJS',
        url: 'https://protected-dusk-42650.herokuapp.com/',
        github: 'https://github.com/demivlkv/note-taker'
    },
    {
        title: 'Team Profile Generator',
        thumbnail: '/images/team-profile-generator.png',
        description: 'A command-line application demonstrating OOP concepts to produce a team profile output in HTML',
        technologies: 'JavaScript / NodeJS / HTML / CSS',
        url: 'https://demivlkv.github.io/team-profile-generator/dist/index.html',
        github: 'https://github.com/demivlkv/team-profile-generator'
    }
];

const container = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            delay: .5,
            duration: 1,
            type: 'tween',
            delayChildren: 1,
            staggerChildren: 0.3
        }
    }
};

const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            type: 'tween'
        }
    }
};

const Project = () => {
    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"       
            className="grid max-w-screen-lg h-auto mx-auto sm:grid-cols-2 md:grid-cols-2 gap-8"
        >

            {projects.map((project) => (

                <motion.div
                    key={project}
                    variants={item}
                    className="relative group"
                >
                    <div className="max-w-md h-max aspect-auto overflow-hidden rounded-lg opacity-80 hover:opacity-100 transition-all shadow-lg shadow-[#1c2025] cursor-pointer">

                        <img src={project.thumbnail} alt={project.title} className="w-full" />

                        <motion.div
                            style={{ y: 5, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex rounded-lg justify-center items-center opacity-0 bg-gradient-to-t from-gray-900 via-[#8aa2a9] to-opacity-30 group-hover:opacity-90 absolute top-0 left-0 h-full w-full"
                        >
                        
                            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 hover:opacity-100">
                                <div class="flex-row text-center p-6">
                                    <h3 className="text-[#2e4057] text-2xl font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-200 text-sm leading-snug drop-shadow-md">
                                        {project.description}
                                    </p>
                                    <p className="text-[#a2d3be] text-xs font-['Source_Code_Pro'] py-2">
                                        {project.technologies}
                                    </p>
                                    <div className="text-center">
                                        <a href={project.url} target="_blank">
                                            <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#5e7089] hover:bg-[#f27c61] text-white hover:text-[#2e4057]"><FiExternalLink size={20} /></button>
                                        </a>
                                        <a href={project.github} target="_blank">
                                            <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#5e7089] hover:bg-[#f27c61] text-white hover:text-[#2e4057]"><FiGithub size={20} /></button>
                                        </a>
                                    </div>
                                </div>
                            </div>   
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Project;