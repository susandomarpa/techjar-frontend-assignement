import React from 'react';
import { AiFillDollarCircle } from "react-icons/ai";
import { FaBorderAll } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const ProfileLevel = () => {
  return (
    <div className='mx-6 mt-10'>
        <div className='hidden md:flex justify-between items-center rounded-3xl pt-2 gap-6 backdrop-blur-md border border-gray-600 border-opacity-10 bg-black bg-opacity-20'>
          <div className='flex gap-4 p-3'>
            <div>
              <img src={window.location.origin + '/person.jpg'} alt="person" width={80} height={80} className="rounded-3xl" />
            </div>
            <div>
              <div className='flex gap-4'>
                <p className='text-sm font-bold text-orange-400 rounded-lg px-2 py-0.5 bg-orange-400 bg-opacity-40'>4.9</p>
                <p className='text-sm font-bold text-red-400 rounded-lg px-2 py-0.5 bg-red-400 bg-opacity-40'>Power Seller</p>
              </div>
              <p className='font-semibold'>applegold</p>
              <p className='text-sm text-gray-300'>since 2019</p>
            </div>
          </div>
          <div className='bg-dark-bg px-6 py-3 rounded-t-3xl text-sm bg-opacity-80'>
            <div className='flex border border-gray-700 rounded-2xl border-opacity-50'>
              <p className='bg-blue-500 pl-3 pr-20 rounded-2xl'>2 Level</p>
              <p className='pr-3 pl-52 rounded-2xl'>3 Level</p>
            </div>
            <div className='flex justify-between mt-6 mb-4'>
              <div className='border border-gray-700 px-4 py-1 rounded-lg bg-black bg-opacity-50'>
                <p className='text-gray-400 text-xs'>30 Days</p>
              </div>
              <div className='border border-gray-700 px-2.5 py-1 rounded-lg bg-black bg-opacity-50'>
                <p className='flex gap-1 items-center text-green-400 text-xs'><AiFillDollarCircle size={16}/>Sales 1000</p>
              </div>
              <div className='border border-gray-700 px-2.5 py-1 rounded-lg bg-black bg-opacity-50'>
                <p className='flex gap-1 items-center text-gray-400 text-xs'><FaBorderAll size={16}/>Orders 20</p>
              </div>
              <div className='border border-gray-700 px-2.5 py-1 rounded-lg bg-black bg-opacity-50'>
                <p className='flex gap-1 items-center text-gray-400 text-xs'><AiFillLike size={16}/>Rate 4.5</p>
              </div>
            </div>
          </div>
          <div className='flex gap-8 mr-6'>
            <div>
              <p className='text-sm text-gray-300'>Orders</p>
              <p>11,753</p>
            </div>
            <div>
              <p className='text-sm text-gray-300'>Positive</p>
              <p className='text-green-500'>99.24%</p>
            </div>
            <div>
              <p className='text-sm text-gray-300'>Negative</p>
              <p className='text-red-500'>0.76%</p>
            </div>
          </div>
        </div>
        <div className='flex md:hidden justify-between items-center rounded-3xl pt-2 gap-6 backdrop-blur-md border border-gray-600 border-opacity-10 bg-gradient-to-r from-gray-500 via-sky-800 to-sky-700'>
          <div className='flex gap-4 p-3'>
            <div>
              <img src={window.location.origin + '/person.jpg'} alt="person" width={80} height={80} className="rounded-3xl" />
            </div>
            <div>
              <div className='flex gap-4'>
                <p className='text-sm font-bold text-orange-400 rounded-lg px-2 py-0.5 bg-orange-400 bg-opacity-40'>4.9</p>
                <p className='text-sm font-bold text-red-400 rounded-lg px-2 py-0.5 bg-red-400 bg-opacity-40'>Power Seller</p>
              </div>
              <p className='font-semibold'>applegold</p>
              <p className='text-sm text-gray-300'>since 2019</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileLevel;
