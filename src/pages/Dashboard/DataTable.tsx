import React from 'react';
import { IoCartOutline } from "react-icons/io5";

const DataTable = () => {
  return (
    <div className='mx-6 mt-10'>
    <div className='flex flex-col items-center rounded-3xl backdrop-blur-md border border-gray-600 border-opacity-50 bg-black bg-opacity-40'>
      <div className='grid justify-center'>
        <div className='flex bg-gray-900 gap-8 px-10 py-5 bg-opacity-60 rounded-b-full w-full'>
          <div>
            <p className='font-semibold'>Item <span className='p-1 rounded-md bg-blue-500'>670</span></p>
          </div>
          <div>
            <p className='font-semibold'>Accounts <span className='p-1 rounded-md bg-gray-700'>73</span></p>
          </div>
          <div>
            <p className='font-semibold'>Power Leveling <span className='p-1 rounded-md bg-gray-700'>467</span></p>
          </div>
          <div>
            <p className='font-semibold'>Feedback <span className='p-1 rounded-md bg-gray-700'>10,929</span></p>
          </div>
        </div>  
      </div>

      <div className='w-[96%]'>
        <div className='flex items-center bg-gray-900 px-5 py-2 bg-opacity-60 rounded-2xl mt-6 border border-gray-600'>
            <div className='w-1/3'>
              <p className='text-gray-300 text-sm'>Server</p>
              <p className='font-semibold'>PC</p>
            </div>
            <div className='w-1/3 border-l border-gray-600 pl-4'>
              <p className='text-gray-300 text-sm'>Game</p>
              <p className='font-semibold'>Warframe</p>
            </div>
            <div className='w-1/3 border-l border-gray-600 pl-4'>
              <p className='text-gray-300'>Select Item</p>
            </div>
        </div>

        <div className='flex items-center justify-between px-5 py-2 bg-opacity-60 rounded-2xl mt-6 border-b'>
            <div className='flex gap-2.5'>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Weapons</p>
              </div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Nova Prime</p>
              </div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Secondary</p>
              </div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Loki Prime</p>
              </div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Equinox Prime</p>
              </div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Primary</p>
              </div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Ivara Prime</p>
              </div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Nezha Prime</p>
              </div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Melee</p>
              </div>
            </div>
            <div>
              <div className='border border-gray-700 px-2 py-1 rounded-lg'>
                <p className='text-gray-300 text-xs'>Short by: Rating</p>
              </div>
            </div>
        </div>

        <div className='flex items-center justify-between px-5 py-2 bg-opacity-60 rounded-2xl mt-6'>
            <div>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>Item</p>
              </div>
            </div>
            <div className='flex gap-32'>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>Delivery</p>
              </div>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>Quantity</p>
              </div>
              <div className='px-2 py-1 mr-12'>
                <p className='text-gray-300 text-sm'>Price</p>
              </div>
            </div>
        </div>

        <div className='flex items-center justify-between px-5 py-2 bg-opacity-60 rounded-2xl mt-6'>
            <div className='flex'>
              <div>
                <img src={window.location.origin + '/gun3.png'} alt="person" width={50} height={50} className="rounded-xl" />
              </div>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>(PC Secondary</p>
                <p className='text-gray-300 text-sm'>[Big-PC] Aklex Prime + 2 Lex prime [Bundle] + Free Orokin Catalyst (MR15)</p>
              </div>
            </div>
            <div className='flex items-center gap-32'>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>48 H</p>
              </div>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>1</p>
              </div>
              <div className='px-2 py-1 flex items-center gap-2'>
                <p className='text-gray-300 text-sm'>$5.00</p>
                <div className='p-2.5 rounded-lg bg-gradient-to-r from-sky-700 via-sky-800 to-purple-500'>
                  <IoCartOutline size={18}/>
                </div>
              </div>
            </div>
        </div>
        <div className='flex items-center justify-between px-5 py-2 bg-opacity-60 rounded-2xl mt-6'>
            <div className='flex'>
              <div>
                <img src={window.location.origin + '/gun2.png'} alt="person" width={50} height={50} className="rounded-xl" />
              </div>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>(PC Primary</p>
                <p className='text-gray-300 text-sm'>[Big-PC] Aklex Prime + 2 Lex prime [Bundle] + Free Orokin Catalyst (MR15)</p>
              </div>
            </div>
            <div className='flex items-center gap-32'>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>48 H</p>
              </div>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>1</p>
              </div>
              <div className='px-2 py-1 flex items-center gap-2'>
                <p className='text-gray-300 text-sm'>$5.00</p>
                <div className='p-2.5 rounded-lg bg-gradient-to-r from-sky-700 via-sky-800 to-purple-500'>
                  <IoCartOutline size={18}/>
                </div>
              </div>
            </div>
        </div>
        <div className='flex items-center justify-between px-5 py-2 bg-opacity-60 rounded-2xl mt-6'>
            <div className='flex'>
              <div>
                <img src={window.location.origin + '/gun1.png'} alt="person" width={50} height={50} className="rounded-xl" />
              </div>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>(PC Secondary</p>
                <p className='text-gray-300 text-sm'>[Big-PC] Aklex Prime + 2 Lex prime [Bundle] + Free Orokin Catalyst (MR15)</p>
              </div>
            </div>
            <div className='flex items-center gap-32'>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>48 H</p>
              </div>
              <div className='px-2 py-1'>
                <p className='text-gray-300 text-sm'>1</p>
              </div>
              <div className='px-2 py-1 flex items-center gap-2'>
                <p className='text-gray-300 text-sm'>$5.00</p>
                <div className='p-2.5 rounded-lg bg-gradient-to-r from-sky-700 via-sky-800 to-purple-500'>
                  <IoCartOutline size={18}/>
                </div>
              </div>
            </div>
        </div>


      </div>
    </div>
  </div>
  );
};

export default DataTable;
