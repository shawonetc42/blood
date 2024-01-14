import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ href, children }) => {
    const isActive = router.pathname === href;

    const defaultClasses =
      'font-semibold transition duration-300 ease-in-out px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300';

    const activeClasses = 'bg-red-600 text-white';
    const hoverClasses = 'hover:bg-red-800 hover:text-white';

    const classes = `${defaultClasses} ${isActive ? activeClasses : hoverClasses}`;

    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between bg-white max-w-screen-md mx-auto px-4 py-5">
      <div className="flex items-center">
        <a href="/">
          <img
            loading="lazy"
            srcSet="/logo.png"
            className="aspect-w-16 aspect-h-10 object-contain w-full max-w-[72px] my-auto"
            alt="Logo"
          />
        </a>
      
      
      <div className={`flex flex-col md:flex-row md:items-center md:space-x-2 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block mt-2 md:mt-0`}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/donation">Donation</NavLink>
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/test">Test</NavLink>
      </div>
      <div className="flex items-center gap-2.5 md:ml-auto">
        <img
          loading="lazy"
          src="/s.png"
          className="aspect-square object-contain w-12 h-12 overflow-hidden"
          alt="Search Icon"
        />
        <span className="bg-[#D02828] text-white text-sm font-bold leading-5 capitalize whitespace-nowrap px-7 py-4 rounded-full self-start">
          <a href="/login">Log in</a>
        </span>
        <div className="flex space-x-2 md:hidden ml-auto">
        <FaBars onClick={toggleMobileMenu} className="cursor-pointer" />
      </div>
        <div className="flex flex-col items-stretch my-auto gap-2">
          <div className="bg-[#D02828] h-0.5" />
          <div className="bg-[#D02828] h-0.5" />
          <div className="bg-[#D02828] h-0.5" />
        </div>
      </div>
    </div>
  </div>  
  );
}

export default Navbar;
