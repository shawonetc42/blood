// components/Sidebar.js
import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleLogout = () => {
    console.log('Logout logic goes here');
  };

  const searchPosts = () => {
    // Navigate to the search results page with the search query as a query parameter
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="w-1/5 bg-gray-800 text-white p-4">
      <div className="flex items-center mb-4">
        <FaReact size={24} className="mr-2" />
        <a href='/dashboard' className="text-2xl font-bold">Admin Dashboard</a>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Posts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-700 text-white"
        />
        <button onClick={searchPosts} className="mt-1 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
          Search
        </button>
      </div>
      <ul>
        <li className="mb-2 hover:text-red-500 cursor-pointer">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li
          className={`mb-2 hover:text-red-500 cursor-pointer ${openDropdown === 'createPost' ? 'text-red-500' : ''}`}
          onClick={() => toggleDropdown('createPost')}
        >
          Create Post
          {openDropdown === 'createPost' && (
            <ul className='font-bold ml-5'>
              <li>
                <Link href="/create">Posts</Link>
              </li>
              <li>
                <Link href="/createquestion">Question</Link>
              </li>
              <li>
                <Link href="/createpoll">Poll</Link>
              </li>
              <li>
                <Link href="/createquiz">Quiz</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2 hover:text-red-500 cursor-pointer">
          <Link href="/posts">Posts</Link>
        </li>
        <li
          className={`mb-2 hover:text-red-500 cursor-pointer ${openDropdown === 'settings' ? 'text-red-500' : ''}`}
          onClick={() => toggleDropdown('settings')}
        >
          Settings
          {openDropdown === 'settings' && (
            <ul>
              <li>
                <Link href="/settings">Option 1</Link>
              </li>
              <li>
                <Link href="/settings">Option 2</Link>
              </li>
              <li>
                <Link href="/settings">Option 3</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2 hover:text-blue-500 cursor-pointer">
          <Link href="/users">Users</Link>
        </li>
        <li className="mb-2 hover:text-blue-500 cursor-pointer" onClick={handleLogout}>
          Logout
        </li>
        <li className="mb-2 hover:text-blue-500 cursor-pointer">
          <Link href="/analytics">Analytics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
