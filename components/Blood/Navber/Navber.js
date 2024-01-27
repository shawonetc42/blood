import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginPage from '../../../pages/login';
import { useSession, signIn, signOut } from 'next-auth/react';
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import Image from 'next/image'; // Import Image from 'next/image'

const USER_IMAGE =
  'https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg';
function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const { data: session } = useSession();

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
        <div className="flex gap-4 items-center">
        {!session ? (
          <button
            className=""
            onClick={() => signIn()}
          >
            <span className="bg-[#D02828] text-white text-sm font-bold leading-5 capitalize whitespace-nowrap px-7 py-4 rounded-full self-start">
          <a href="/login">Log in</a>
        </span>
          </button>
        ) : (
          <button
            className="bg-white text-gray-500 p-1 px-3 text-[12px] border-[1px] rounded-full"
            onClick={() => signOut()}
          >
            <span className="hidden sm:block">SIGN OUT</span>
            <HiArrowLeftOnRectangle className="sm:hidden text-[17px]" />
          </button>
        )}
        {session ? (
          // Use next/image for user image
          <Image
            src={session ? session?.user?.image : USER_IMAGE}
            alt="user image"
            className="rounded-full cursor-pointer"
            onClick={() => router.push('/dashboard')}
            width={40}
            height={40}
          />
        ) : null}
      </div>
        <div className="hidden md:flex space-x-2">
          <NavLink href="/" onClick={handleNavLinkClick} className="nav-link">Home</NavLink>
          <NavLink href="/about" onClick={handleNavLinkClick} className="nav-link">About</NavLink>
          <NavLink href="/donation" onClick={handleNavLinkClick} className="nav-link">Donation</NavLink>
          <NavLink href="/dashboard" onClick={handleNavLinkClick} className="nav-link">Dashboard</NavLink>
          <NavLink href="/test" onClick={handleNavLinkClick} className="nav-link">Test</NavLink>
         
        </div>

        
      </div>

      
        <div className="  md:hidden flex  py-2">
          <NavLink href="/" onClick={handleNavLinkClick} className="">Home</NavLink>
          <NavLink href="/create-post" onClick={handleNavLinkClick} className="">Post</NavLink>
          <NavLink href="/test" onClick={handleNavLinkClick} className="">Test</NavLink>
          
          
        </div>
      
    </div>
  );
}

export default Navbar;
