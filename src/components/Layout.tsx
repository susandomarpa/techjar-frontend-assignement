import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }: {children?: React.ReactNode}) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
