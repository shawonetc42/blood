import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Form from '../../components/CreatePost/Form';

function CreatePost() {
  const {data:session}=useSession();
  const router=useRouter();
  
  
  return (
    <div className='flex justify-center'>
    <div className='p-6 mt-8 lg:w-[35%] md:w-[50%]'>
        <h2 className='text-[30px] 
        font-extrabold text-blue-500'><div className="bg-red-700 self-stretch flex w-full flex-col justify-center px-16 py-4 items-start max-md:max-w-full max-md:px-5">
      <img
        loading="lazy"
        src="logo.png"
        className="aspect-[9.2] object-contain object-center w-[276px] justify-center items-center overflow-hidden max-w-full max-md:ml-2.5 max-sm:-ml-1"
      />
    </div></h2>
        
        <p className='font-bold'>তথ্য শেয়ার করুন </p>
        <Form/>
    </div>
    </div>
  )
}

export default CreatePost
