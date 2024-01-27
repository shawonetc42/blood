import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const router = useRouter();
  const [isMobileView, setIsMobileView] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleNavigation = (route) => {
    router.push(route);
    if (isMobileView) {
      // Close the sidebar on mobile view after navigation
      setIsMobileView(false);
    }
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    handleNavigation(e.target.value);
  };

  return (
    <div className="bg-gray-200">
      {/* Sidebar for desktop view */}
      <div className="hidden md:block h-screen w-52 bg-gray-200">
        <ul className="p-4">
          <NavItem onClick={() => handleNavigation('/dashboard')} label="Home" icon={faHome} />
          <NavItem onClick={() => handleNavigation('/dashboard/profile')} label="User Profile" icon={faUser} />
          {/* Add more navigation items as needed */}
        </ul>
      </div>

      {/* Sidebar for mobile view */}
      {isMobileView && (
        <div className="block md:hidden bg-gray-200">
          <div className="relative">
            <button
              className="w-full text-left py-2 pl-4 pr-10 border-b border-gray-300 focus:outline-none"
              onClick={() => setIsMobileView(false)}
            >
              {selectedOption || 'Select an option'} <span className="absolute right-4 top-2"><FontAwesomeIcon icon={faTimes} /></span>
            </button>
            <div className="absolute z-10 left-0 w-full bg-gray-200">
              <ul>
                <li className="p-4 hover:bg-gray-300 cursor-pointer" onClick={() => handleNavigation('/dashboard')}>
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </li>
                <li className="p-4 hover:bg-gray-300 cursor-pointer" onClick={() => handleNavigation('/dashboard/profile')}>
                  <FontAwesomeIcon icon={faUser} className="mr-2" /> User Profile
                </li>
                {/* Add more navigation items as needed */}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mobile view toggle button */}
      <button
        className="md:hidden absolute top-0 right-0 mt-40 p-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={() => setIsMobileView(!isMobileView)}
      >
        <FontAwesomeIcon icon={isMobileView ? faTimes : faBars} />
      </button>
    </div>
  );
};

const NavItem = ({ onClick, label, icon }) => {
  return (
    <li className="cursor-pointer flex items-center py-2 transition duration-300 ease-in-out hover:bg-gray-300 transform hover:scale-105" onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {label}
    </li>
  );
};

export default Sidebar;
