import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-5">
      <div className="hidden lg:block lg:min-h-screen lg:col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </div>
  );
};

export default layout;
