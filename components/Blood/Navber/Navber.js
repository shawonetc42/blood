import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { HiOutlinePencilSquare, HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from 'next/router';

const USER_IMAGE = 'https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg';

function Navber() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log("Session", session);

  return (
    <div>
      <nav className="fixed w-full bg-white top-0 border-gray-200 dark:bg-gray-900">
        <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <p className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <Image src="/logo1.png" alt="Flowbite Logo" width={42} height={42} /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </p>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className='flex gap-4 max-md:ml-2.5 max-sm:'>
              {session ? <button onClick={() => router.push('/create-post')} className='bg-gray-700 px-3 text-white rounded-full text-[12px]'>
                <span className='hidden sm:block'>
                  CREATE POST</span>
                <HiOutlinePencilSquare
                  className='sm:hidden text-[17px]' /></button> : null}
              {!session ? <button className='bg-white text-gray-500 p-1 px-3 text-[12px] border-[1px] rounded-full' onClick={() => signIn()}>
                <span className='font-bold  hidden sm:block'>
                  SIGN IN</span>
                <HiArrowLeftOnRectangle
                  className='sm:hidden text-[17px]' /></button>
                : <button className='bg-white text-gray-500 p-1 px-3 text-[12px] border-[1px] rounded-full' onClick={() => signOut()}>
                  <span className='hidden sm:block'>
                    SIGN OUT</span>
                  <HiArrowLeftOnRectangle
                    className='sm:hidden text-[17px]' /></button>}
              {session ?
                <Image src={session ? session?.user?.image : USER_IMAGE} alt='user image'
                  className='rounded-full cursor-pointer' onClick={() => router.push('/profile')}
                  width={40} height={40} /> : null}
            </div>
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700
                 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">following</a>
              </li>
              {/* Removed the Services link */}
              {/* Removed the Services link */}
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white
                 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Community</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white
                 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* end */}
      {/* <div className="fixed w-full bg-red-700 flex justify-between p-3  border-b-[2px] ">
        <Link href="/">
          <p>
            <img
              loading="lazy"
              src="logo.png"
              className="aspect-[9.2] object-contain object-center w-[276px] justify-center items-center overflow-hidden max-w-full ml-40 max-md:ml- max-sm:ml-10"
            />
          </p>
        </Link>
        <div className='flex gap-4'></div>
      </div> */}
    </div>
  )
}

export default Navber;
