import React from 'react';
import { motion } from 'framer-motion';
import { CgHeart, CgCopyright } from 'react-icons/cg';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="w-full p-8 text-[#8aa2a9] text-center"
    >
      <p>Made with <CgHeart className="inline-flex pb-[3px]" style={{ color: '#79fcca' }} size={20} /> by Demi Hayashi.</p>
      <p><CgCopyright className="inline-flex pb-[3px]" style={{ color: '#79fcca' }} size={20} /> 2022. All rights reserved. </p>

      {/* DISPLAY SOCIAL MEDIA ICONS ON SIDE OVER 1024PX SCRN RES */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://github.com/demivlkv" target="_blank"><FiGithub size={30} /></a></li>
            <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://www.linkedin.com/in/demihayashi/" target="_blank"><FiLinkedin size={30} /></a></li>
            <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://www.instagram.com/hii.demii/" target="_blank"><FiInstagram size={30} /></a></li>
            <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="mailto:hayashi.demi@gmail.com"><FiMail size={30} /></a></li>
        </ul>
      </div>

      {/* DISPLAY SOCIAL MEDIA ICONS ON BOTTOM UNDER 1024PX SCRN RES */}
      <div>
        <ul className="lg:hidden flex flex-row justify-center">
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://github.com/demivlkv" target="_blank"><FiGithub size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://www.linkedin.com/in/demihayashi/" target="_blank"><FiLinkedin size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://www.instagram.com/hii.demii/" target="_blank"><FiInstagram size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="mailto:hayashi.demi@gmail.com"><FiMail size={25} /></a></li>
        </ul>
      </div>

    </motion.footer>
  );
};

export default Footer;
