// pages/employees.js

import React, { useState } from 'react';
import employeesData from '../employees.json';

const EmployeesPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Employees</h1>
        {employeesData.map((employee, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg mb-4 overflow-hidden">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleDetails(index)}
            >
              <p className="text-lg font-semibold">{employee.name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={expandedIndex === index ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                />
              </svg>
            </div>
            <div className={`px-4 pb-4 ${expandedIndex === index ? 'block' : 'hidden'}`}>
              <p className="text-gray-600">{employee.title}</p>
              <p className="text-sm text-gray-500 mt-2">{employee.email}</p>
              <p className="text-sm text-gray-500 mt-1">{employee.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesPage;
