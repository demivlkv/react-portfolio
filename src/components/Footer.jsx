import React from 'react';
import { CgHeart, CgCopyright } from 'react-icons/cg';

const Footer = () => {
  return (
    <footer className="w-full p-8 text-slate-400 text-center">
        <p>Made with <CgHeart className="inline-flex pb-[3px]" style={{ color: '#6fffe9' }} size={20} /> by Demi Hayashi.</p>
        <p><CgCopyright className="inline-flex pb-[3px]" style={{ color: '#6fffe9' }} size={20} /> 2022. All rights reserved.</p>
    </footer>
  );
};

export default Footer;