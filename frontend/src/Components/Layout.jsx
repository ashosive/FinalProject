import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-gray-200">{children}</div>
    </div>
  );
};

export default Layout;
