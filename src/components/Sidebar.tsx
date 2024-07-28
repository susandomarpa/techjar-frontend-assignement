import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul>
        <li className="mt-4">Home</li>
        <li className="mt-4">Profile</li>
        <li className="mt-4">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
