import React from 'react';
import { FaFacebook, FaYoutube, FaReddit, FaApple, FaGoogle, FaStar } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";



const Footer = () => {
  return (
    <footer className="hidden fixed bottom-0 w-full md:flex items-center justify-between px-5 py-2.5 bg-dark-bg">
      <div className='flex items-center'>
      <div className='flex gap-5 text-gray-400'>
        <FaFacebook size={20} />
        <FaSquareXTwitter size={20} />
        <FaYoutube size={20} />
        <FaReddit size={20} />
      </div>
      <p className='flex items-center gap-2 border px-1.5 py-0.5 ml-4 rounded-lg border-gray-700 text-gray-400'><TbWorld size={20} /> En</p>
      </div>
      <div className='flex gap-5 items-center text-gray-400'>
        <p className='flex gap-1'><FaApple size={20} />Pay</p>
        <p className='flex gap-1'><FaGoogle size={20} />Pay</p>
        <RiVisaLine size={40} />
        <RiMastercardFill size={30} />
        <p>Skrill</p>
        <p>NETELLER</p>
      </div>
      <div className='flex gap-5 items-center text-gray-400'>
        <p className='flex items-center gap-1 text-white text-sm'><FaStar size={20} className="text-green-500"/>Trustpilot <span className='text-xs text-green-600'>4.3</span></p>
        <p className='text-xs'>PlayersAuction &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
