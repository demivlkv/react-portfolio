import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = () => {
    const projects = [
        {
            title: 'Book Nook',
            thumbnail: '/screenshots/book-nook.png',
            description: 'A collaborative effort to provide a platform for all parents to discuss books for their young readers. Built by the Shooting Stars.',
            technologies: 'JavaScript / NodeJS / MySQL',
            url: 'https://booknook-stars.herokuapp.com/',
            github: 'https://github.com/demivlkv/book-nook'
        },
        {
            title: 'Tech Blog',
            thumbnail: '/screenshots/tech-blog.png',
            description: 'A full-stack CMS-style blog site where users can create an account, publish articles, blog posts, & thoughts.',
            technologies: 'JavaScript / NodeJS / MySQL',
            url: 'https://frozen-sierra-30429.herokuapp.com/',
            github: 'https://github.com/demivlkv/tech-blog'
        },
        {
            title: 'Find-A-Story',
            thumbnail: '/screenshots/find-a-story.png',
            description: 'A collaborative project to develop a media database application using the Open Movie Database API & Google Books API.',
            technologies: 'JavaScript / jQuery /  HTML / CSS',
            url: 'https://demivlkv.github.io/Find-A-Story',
            github: 'https://github.com/demivlkv/Find-A-Story'
        },
        {
            title: 'Weather Dashboard',
            thumbnail: '/screenshots/weather-dashboard.png',
            description: 'A weather dashboard application integrated with OpenWeather API.',
            technologies: 'JavaScript / HTML / CSS',
            url: 'https://demivlkv.github.io/weather-dashboard',
            github: 'https://github.com/demivlkv/weather-dashboard'
        },
        {
            title: 'Note Taker',
            thumbnail: '/screenshots/note-taker.png',
            description: 'A simple note-taking application with the ability to create, save, update, and delete notes.',
            technologies: 'JavaScript / NodeJS / ExpressJS',
            url: 'https://protected-dusk-42650.herokuapp.com/',
            github: 'https://github.com/demivlkv/note-taker'
        },
        {
            title: 'Team Profile Generator',
            thumbnail: '/screenshots/team-profile-generator.png',
            description: 'A command-line application demonstrating OOP to generate a team profile output in HTML.',
            technologies: 'JavaScript / NodeJS / OOP',
            url: 'https://demivlkv.github.io/team-profile-generator/dist/index.html',
            github: 'https://github.com/demivlkv/team-profile-generator'
        }
    ];

    return (
        <div className="grid h-auto sm:grid-cols-2 md:grid-cols-3 gap-8">

            {projects.map((project) => (
                <div className="max-w-md h-max overflow-hidden rounded-lg border border-gray-300 opacity-70 hover:opacity-100 transition-all bg-[#e0e7e5a6] shadow-lg shadow-[#aaadb1]">

                    <img src={project.thumbnail} alt={project.title} className="w-full" />

                    <div className="p-4">

                        <h3 className="text-[#94b0b3] text-2xl font-semibold mb-2">
                            {project.title}
                        </h3>
                        <p>
                            {project.description}
                        </p>
                        <p className="text-[#71b8a2] text-sm font-['Source_Code_Pro'] py-4">
                            {project.technologies}
                        </p>
                        <div className="text-center">
                            <a href={project.url} target="_blank" className="text-white hover:border-0">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#94b0b3] hover:bg-[#d7fbeb]"><FiExternalLink size={20} /></button>
                            </a>
                            <a href={project.github} target="_blank" className="text-white hover:border-0">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#94b0b3] hover:bg-[#d7fbeb]"><FiGithub size={20} /></button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            ))}
            
        </div>
    );
};

export default Project;