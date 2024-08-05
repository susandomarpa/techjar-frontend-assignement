import React from 'react';
import { FaTag, FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { AiFillContacts } from "react-icons/ai";

const RightSidebar = () => {
  return (
    <div className='hidden md:grid w-1/5 h-screen bg-sidebar rounded-3xl'>
          <div className='m-3 p-3 rounded-3xl bg-gradient-to-r from-pink-300 from-1% to-gray-900 to-20%'>
            <div className='flex justify-between items-center'>
              <div>
                <img src={window.location.origin + '/person.jpg'} alt="person" width={45} height={45} className="rounded-full" />
              </div>
              <div className='p-2.5 rounded-lg bg-sky-700'>
                <FaTag size={18}/>
              </div>
                <FaBell size={18} className="text-gray-400"/>
                <AiFillContacts size={18} className="text-gray-400"/>
                <IoIosSettings size={18} className="text-gray-400"/>
              <div>
              </div>
            </div>
            <div className='flex justify-between text-sm mt-3 text-gray-400'>
              <p>Order: 332</p>
              <p>Need: 24</p>
            </div>
          </div>

          <div className='m-3 rounded-3xl bg-gradient-to-r from-sky-700 via-purple-500 to-sky-700'>
            <div className='flex justify-between items-center'>
              <div>
                <img src={window.location.origin + '/cartoon.png'} alt="person" width={200} height={200} className="rounded-3xl" />
              </div>
              <div className='py-4'>
                <p>Account Calculator</p>
                <p className='text-sm text-gray-300'>Evaluate your Account value!</p>
              </div>
            </div>
          </div>

          <div className='m-3'>
            <div className='grid justify-between items-center'>
              <p className='flex items-center gap-2 text-gray-400 text-sm font-semibold'><IoIosSettings size={18} className="text-gray-400"/> YOUR GAME STATISTICS</p>
              <div>
                <img src={window.location.origin + '/cartoon.png'} alt="person" width={200} height={200} className="rounded-3xl" />
              </div>
            </div>
          </div>

          <div className='m-3'>
            <div className='grid items-center'>
              <p className='font-semibold'>Guides & Tips Player</p>
              <div className='px-4 py-3 mt-3 rounded-3xl bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600'>
                <p className='text-xs text-gray-300'>SKILLING & LEVELING</p>
                <p>OSRS CRAFTING GUIDE</p>
                <p>1-99</p>
                <div className='flex gap-2 mt-2'>
                  <img src={window.location.origin + '/person.jpg'} alt="person" width={20} height={20} className="rounded-full" />
                  <p className='text-xs'>BY MINA <span className='text-gray-400'>OCT 3TH</span></p>
                </div>
              </div>

              <div className='px-4 py-3 mt-3 rounded-3xl bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600'>
                <p className='text-xs text-gray-300'>SKILLING & LEVELING</p>
                <p>OSRS CRAFTING GUIDE</p>
                <p>1-99</p>
                <div className='flex gap-2 mt-2'>
                  <img src={window.location.origin + '/person.jpg'} alt="person" width={20} height={20} className="rounded-full" />
                  <p className='text-xs'>BY MINA <span className='text-gray-400'>OCT 3TH</span></p>
                </div>
              </div>

              <div className='px-4 py-3 mt-3 rounded-3xl bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600'>
                <p className='text-xs text-gray-300'>SKILLING & LEVELING</p>
                <p>OSRS CRAFTING GUIDE</p>
                <p>1-99</p>
                <div className='flex gap-2 mt-2'>
                  <img src={window.location.origin + '/person.jpg'} alt="person" width={20} height={20} className="rounded-full" />
                  <p className='text-xs'>BY MINA <span className='text-gray-400'>OCT 3TH</span></p>
                </div>
              </div>

              <div>
              </div>
            </div>
          </div>
      </div>
  );
};

export default RightSidebar;
