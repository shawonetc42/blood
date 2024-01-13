// DashboardStats.js

import React from 'react';

const DashboardStats = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Total Posts Widget */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Total Posts</h3>
        <p className="text-3xl font-bold">{data.totalPosts}</p>
      </div>

      {/* Total Users Widget */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Total Users</h3>
        <p className="text-3xl font-bold">{data.totalUsers}</p>
      </div>

      {/* New Comments Widget */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">New Comments</h3>
        <p className="text-3xl font-bold">{data.newComments}</p>
      </div>
    </div>
  );
};

export default DashboardStats;
