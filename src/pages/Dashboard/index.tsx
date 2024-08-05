import React, { useState, useEffect } from 'react';

import AnimatedButton from '../../components/AnimatedButton';
import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import RightSidebar from './RightSidebar';
import ProfileLevel from './ProfileLevel';
import DataTable from './DataTable';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 2000); // Change this timeout as needed
  }, []);

  return (
    <>
    {isLoading ? <LoadingSpinner /> : (
    <Layout>
      <div className="flex">
        <div className='md:w-4/5'>
          <div className='grid md:flex justify-between mt-40 md:mt-8 mx-6'>
            <div>
              <img src={window.location.origin + '/warframe-logo.png'} alt="person" className="md:w-[240px] w-[170px]" />
            </div>
            <div className='flex justify-between md:grid md:w-56 text-sm md:mt-16'>
              <p className='text-gray-300'>I hope you enjoy our products as much as i enjoy offering them to you. If you have any questions or comments, please contact me.</p>
              <AnimatedButton title="Contact" className='mt-6 py-3 w-48 rounded-2xl bg-opacity-70 bg-sky-700 text-base font-medium' />
            </div>
          </div>
          <ProfileLevel />
          <DataTable />
        </div>
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </Layout>
    )}
    </>
  );
};

export default Dashboard;
