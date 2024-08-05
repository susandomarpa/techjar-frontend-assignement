import React from 'react';
import { RiHome5Fill, RiSwordFill, RiInformationFill, RiGamepadFill } from "react-icons/ri";
import { GiMedalSkull } from "react-icons/gi";
import { MdOutlineBolt } from "react-icons/md";
import { PiCirclesFourFill } from "react-icons/pi";
import { BsFileRichtextFill, BsMoonFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { SiMoonrepo } from "react-icons/si";


const Sidebar = () => {
  return (
    <div className="w-16 bg-sidebar text-white p-4 hidden md:grid">
      <h1 className="text-3xl font-bold"><img src={window.location.origin + '/logo.png'} alt="person" width={60} height={60} className="rounded-3xl" /></h1>
      <div className='flex flex-col items-center gap-80'>
        <ul className=''>
          <li className="mt-6"><RiHome5Fill size={20} /></li>
          <li className="mt-6"><SiMoonrepo size={20} /></li>
          <li className="mt-6"><RiSwordFill size={20} /></li>
          <li className="mt-6"><GiMedalSkull size={20} /></li>
          <li className="mt-6"><MdOutlineBolt size={20} /></li>
          <li className="mt-6"><PiCirclesFourFill size={20} /></li>
        </ul>
        <ul className=''>
          <li className="mt-6"><RiInformationFill size={20} /></li>
          <li className="mt-6"><RiGamepadFill size={20} /></li>
          <li className="mt-6"><BsFileRichtextFill size={20} /></li>
          <li className="mt-6"><BsMoonFill size={20} /></li>
          <li className="mt-6"><IoMdSunny size={20} /></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
