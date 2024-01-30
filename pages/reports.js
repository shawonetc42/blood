// pages/reports.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from the backend API
    axios.get('/api/report')
      .then(response => {
        setReports(response.data.reports);
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <p>Post ID: {report.postId}</p>
            <p>Content: {report.reportContent}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsPage;
