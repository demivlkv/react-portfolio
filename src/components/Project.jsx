import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = () => {
    const projects = [
        {
            title: 'Book Nook',
            thumbnail: '/screenshots/book-nook.png',
            description: 'A collaborative effort to provide a platform for all parents to discuss books for their young readers.',
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
            technologies: 'JavaScript / HTML / Bootstrap',
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
            description: 'A command-line application demonstrating OOP concepts to generate a team profile output in HTML.',
            technologies: 'JavaScript / NodeJS / OOP',
            url: 'https://demivlkv.github.io/team-profile-generator/dist/index.html',
            github: 'https://github.com/demivlkv/team-profile-generator'
        }
    ];

    return (
        <div className="grid max-w-screen-lg h-auto mx-auto sm:grid-cols-2 md:grid-cols-2 gap-8">

            {projects.map((project) => (
                <div className="max-w-md h-max aspect-auto overflow-hidden rounded-lg border border-gray-300 opacity-80 hover:opacity-100 transition-all bg-[#e0e7e5a6] shadow-lg shadow-[#aaadb1] cursor-pointer">

                    <div class="relative group">

                        <img src={project.thumbnail} alt={project.title} className="w-full" />

                        <div
                            class="flex justify-center items-center transition-all opacity-0 bg-gradient-to-t from-gray-700 via-[#d7fbeb] to-opacity-30 group-hover:opacity-90 absolute top-0 left-0 h-full w-full">
                        </div>
                        <div class="absolute top-0 left-0 w-full h-full flex justify-center items-end opacity-0 hover:opacity-100">
                            <div class="flex-row text-center px-6 mb-4">
                        <h3 className="text-[#505c5e] text-2xl font-semibold mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-800 text-sm leading-snug drop-shadow-md">
                            {project.description}
                        </p>
                        <p className="text-[#d7fbeb] text-sm font-['Source_Code_Pro'] py-2">
                            {project.technologies}
                        </p>
                        <div className="text-center">
                            <a href={project.url} target="_blank" className="text-white hover:border-0">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#94b0b3] hover:bg-[#d7fbeb] hover:text-[#94b0b3]"><FiExternalLink size={20} /></button>
                            </a>
                            <a href={project.github} target="_blank" className="text-white hover:border-0">
                                <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#94b0b3] hover:bg-[#d7fbeb] hover:text-[#94b0b3]"><FiGithub size={20} /></button>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            
        </div>
    );
};

export default Project;