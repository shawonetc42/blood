import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginPage from '../../../pages/login';

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const NavLink = ({ href, onClick, children }) => {
    const isActive = router.pathname === href;

    const defaultClasses =
      'font-semibold transition duration-300 ease-in-out px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300';

    const activeClasses = 'bg-red-600 text-white';
    const hoverClasses = 'hover:bg-red-800 hover:text-white';

    const classes = `${defaultClasses} ${isActive ? activeClasses : hoverClasses}`;

    const handleClick = (e) => {
      e.preventDefault();
      if (onClick) onClick();
      router.push(href);
      if (menuOpen) {
        setMenuOpen(false); // Close the menu on navigation
      }
    };

    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
      </a>
    );
  };

  const handleNavLinkClick = () => {
    // Your custom onClick functionality for NavLink
    console.log('NavLink clicked!');
  };

  // Function to check if "More" button needs to be shown
  const checkShowMore = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navLinksArray = Array.from(navLinks);
    const visibleLinks = navLinksArray.filter((link) => window.getComputedStyle(link).display !== 'none');
    setShowMore(visibleLinks.length !== navLinksArray.length);
  };

  // Listen for window resize events to update "More" button visibility
  useEffect(() => {
    window.addEventListener('resize', checkShowMore);
    checkShowMore(); // Initial check
    return () => window.removeEventListener('resize', checkShowMore);
  }, []);

  return (
    <div className="bg-red-700">
      <div className="max-w-screen-md mx-auto px-2  flex justify-between items-center">
        <a href="/">
          <img
            loading="lazy"
            srcSet="/logo.png"
            className="aspect-w-16 aspect-h-10 object-contain w-full max-w-[72px] my-auto"
            alt="Logo"
          />
        </a>

        <div className="hidden md:flex space-x-2">
          <NavLink href="/" onClick={handleNavLinkClick} className="nav-link">Home</NavLink>
          <NavLink href="/about" onClick={handleNavLinkClick} className="nav-link">About</NavLink>
          <NavLink href="/donation" onClick={handleNavLinkClick} className="nav-link">Donation</NavLink>
          <NavLink href="/dashboard" onClick={handleNavLinkClick} className="nav-link">Dashboard</NavLink>
          <NavLink href="/test" onClick={handleNavLinkClick} className="nav-link">Test</NavLink>
          <LoginPage/>
        </div>

        
      </div>

      
        <div className="  md:hidden flex -mt-14 ml-40 py-2">
          <NavLink href="/" onClick={handleNavLinkClick} className="">Home</NavLink>
          <NavLink href="/create-post" onClick={handleNavLinkClick} className="">Post</NavLink>
          <NavLink href="/test" onClick={handleNavLinkClick} className="">Test</NavLink>
          <LoginPage/>
          
        </div>
      
    </div>
  );
}

export default Navbar;
