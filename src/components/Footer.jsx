import React from 'react';
import { CgHeart, CgCopyright } from 'react-icons/cg';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full p-8 text-[#8aa2a9] text-center">
      <p>Made with <CgHeart className="inline-flex pb-[3px]" style={{ color: '#f27c61' }} size={20} /> by Demi Hayashi.</p>
      <p><CgCopyright className="inline-flex pb-[3px]" style={{ color: '#f27c61' }} size={20} /> 2022. All rights reserved. </p>
        
      {/* DISPLAY SOCIAL MEDIA ICONS IN FOOTER UNDER 1024PX SCRN RES */}
      <div>
        <ul className="lg:hidden flex flex-row justify-center">
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#f27c61] hover:border-0" href="https://github.com/demivlkv" target="_blank"><FiGithub size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#f27c61] hover:border-0" href="https://www.linkedin.com/in/demihayashi/" target="_blank"><FiLinkedin size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#f27c61] hover:border-0" href="https://www.instagram.com/hii.demii/" target="_blank"><FiInstagram size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#f27c61] hover:border-0" href="mailto:hayashi.demi@gmail.com"><FiMail size={25} /></a></li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;