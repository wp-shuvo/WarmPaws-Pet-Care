import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayouuts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#FFF7EC]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouuts;
