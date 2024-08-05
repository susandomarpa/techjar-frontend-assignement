import React from 'react';
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-black p-1 shadow md:hidden bg-opacity-10 flex justify-between items-center">
      <div className="text-xl font-bold"><img src={window.location.origin + '/logo.png'} alt="person" className="rounded-3xl w-12" /></div>
      <div className="text-xl font-bold flex items-center gap-2">
        <img src={window.location.origin + '/person.jpg'} alt="person" className="rounded-3xl w-9" />
        <LuMenu size={26} />
      </div>
    </header>
  );
};

export default Header;
