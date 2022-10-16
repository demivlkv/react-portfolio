import React from 'react';
import { FiGithub, FiLink } from 'react-icons/fi';

const Project = () => {
    const projects = [
        {
            title: 'Book Nook',
            thumbnail: '/screenshots/book-nook.png',
            url: 'https://booknook-stars.herokuapp.com/',
            github: 'https://github.com/demivlkv/book-nook'
        },
        {
            title: 'Tech Blog',
            thumbnail: '/screenshots/tech-blog.png',
            url: 'https://frozen-sierra-30429.herokuapp.com/',
            github: 'https://github.com/demivlkv/tech-blog'
        },
        {
            title: 'Find-A-Story',
            thumbnail: '/screenshots/find-a-story.png',
            url: 'https://demivlkv.github.io/Find-A-Story',
            github: 'https://github.com/demivlkv/Find-A-Story'
        },
        {
            title: 'Weather Dashboard',
            thumbnail: '/screenshots/weather-dashboard.png',
            url: 'https://demivlkv.github.io/weather-dashboard',
            github: 'https://github.com/demivlkv/weather-dashboard'
        },
        {
            title: 'Note Taker',
            thumbnail: '/screenshots/note-taker.png',
            url: 'https://protected-dusk-42650.herokuapp.com/',
            github: 'https://github.com/demivlkv/note-taker'
        },
        {
            title: 'Team Profile Generator',
            thumbnail: '/screenshots/note-taker.png',
            url: 'https://demivlkv.github.io/team-profile-generator/dist/index.html',
            github: 'https://github.com/demivlkv/team-profile-generator'
        }
    ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        {projects.map((project) => (

            <div 
                style={{ backgroundImage: `url(${project.thumbnail})` }}
                className="shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div"
            >
                    
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-medium text-white tracking-wider">
                        {project.title}
                    </span>
                    <div className="pt-8 text-center">
                        <a href={project.url} target="_blank" className="text-white hover:text-slate-300 hover:border-0">
                            <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b] hover:bg-[#1c2541]"><FiLink size={20} /></button>
                        </a>
                        <a href={project.github} target="_blank" className="text-white hover:text-slate-300 hover:border-0">
                            <button className="mx-2 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-[#3a506b] hover:bg-[#1c2541]"><FiGithub size={20} /></button>
                        </a>
                    </div>
                </div>
            </div>

        ))}
        
    </div>
  );
};

export default Project;