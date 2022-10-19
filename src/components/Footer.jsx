import React from 'react';
import { CgHeart, CgCopyright } from 'react-icons/cg';

const Footer = () => {
  return (
    <footer className="w-full p-8 text-[#94b0b3] text-center">
        <p>Made with <CgHeart className="inline-flex pb-[3px]" style={{ color: '#9fdac7' }} size={20} /> by Demi Hayashi.</p>
        <p><CgCopyright className="inline-flex pb-[3px]" style={{ color: '#9fdac7' }} size={20} /> 2022. All rights reserved.</p>
    </footer>
  );
};

export default Footer;