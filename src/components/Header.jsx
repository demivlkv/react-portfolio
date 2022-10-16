import React from 'react';
import Navigation from './Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import Logo from '../assets/logo.png'

const Header = () => {
    const [nav, setNav, currentPage, setCurrentPage] = useState(false);
    const handleClick = (currentPage) => setCurrentPage(currentPage);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4">
            <div>
                <a href="/"><img src={Logo} alt="DH Logo" style={{ width: '50px' }} /></a>
            </div>

            {(() => {
                switch (currentPage) {
                    case 'home':
                        return <Home handleClick={handleClick} />
                    case 'about':
                        return <About handleClick={handleClick} />
                    case 'portfolio':
                        return <Portfolio handleClick={handleClick} />
                    case 'contact':
                        return <Contact handleClick={handleClick} />
                    case 'resume':
                        return <Resume handleClick={handleClick} />
                    default:
                        return null;
            }
            })()}

            <Navigation
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            {/* SOCIAL MEDIA ICONS */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-300 hover:text-[#6fffe9] hover:border-0" href="https://github.com/demivlkv" target="_blank"><FiGithub size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-300 hover:text-[#6fffe9] hover:border-0" href="https://www.linkedin.com/in/demihayashi/" target="_blank"><FiLinkedin size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-300 hover:text-[#6fffe9] hover:border-0" href="https://www.instagram.com/hii.demii/" target="_blank"><FiInstagram size={30} /></a></li>
                    <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-300 hover:text-[#6fffe9] hover:border-0" href="mailto:hayashi.demi@gmail.com"><FiMail size={30} /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;