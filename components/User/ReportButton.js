import React from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const ReportButton = ({ postId }) => {
  const handleReport = async () => {
    try {
      // Make an HTTP POST request to send the report to the admin
      const response = await axios.post('/api/report', { postId });
      console.log('Report submitted successfully:', response.data);
      alert('Report submitted successfully!');
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('An error occurred while submitting the report. Please try again later.');
    }
  };

  return (
    <button onClick={handleReport} className="bg-red-500 text-white px-4 py-2 rounded">
      Report
    </button>
  );
};

export default ReportButton;
