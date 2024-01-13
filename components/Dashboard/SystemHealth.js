// SystemHealth.js

import React from 'react';

const SystemHealth = ({ systemData }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">System Health Overview</h3>
      <div>
        <p>CPU Usage: {systemData.cpuUsage}</p>
        <p>Memory Usage: {systemData.memoryUsage}</p>
        <p>Storage Usage: {systemData.storageUsage}</p>
      </div>
    </div>
  );
};

export default SystemHealth;
