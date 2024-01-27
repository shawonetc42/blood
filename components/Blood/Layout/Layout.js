// components/Layout.js
import React from 'react';
import Sidebar from '../../Blood/Layout/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="bg-gray-800 text-white py-4 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-3 py-1 rounded-md mr-4 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-y-auto bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
