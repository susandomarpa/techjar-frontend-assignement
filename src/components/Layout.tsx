import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }: {children?: React.ReactNode}) => {
  return (
    <div className="flex h-screen bg-dark-bg text-white">
    <div className="flex w-screen h-[350px] md:h-[650px] md:bg-[url('/public/warframe.png')] bg-[url('/public/warframe-mb.png')] bg-cover">
    {/* <div className="flex w-screen h-[650px] bg-[url('/public/warframe.png')] bg-cover"> */}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Layout;
