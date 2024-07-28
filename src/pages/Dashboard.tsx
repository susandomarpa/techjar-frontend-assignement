import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';

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
    <Layout />
    )}
    </>
  );
};

export default Dashboard;
