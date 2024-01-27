import React from 'react'
import Profile from './Profile'
import { LuSend  } from 'react-icons/lu'
import { motion } from "framer-motion";
function FirrstPage() {
  return (

<main class="">
    
    <div class="container mx-auto px-8 py-8 sm:flex-row items-center   lg:py-40 relative flex flex-col lg:flex-row items-center">
        <div class="">
            <h1 class="text-center lg:text-left text-3xl sm:text-5xl font-light text-black font-medium leading-tight mb-4"><strong class=
            "font-black text-3xl text-white opacity-90 sm:text-4xl block">A full-stack developer</strong></h1>
            <p class="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">Full-stack web developers have expertise in server-side programming 
            languages and frameworks. Common back-end programming languages include Python, Ruby, Java, or Node.js.</p>
            <div className=' flex mt-8'>
              
              <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-green-700 hover:bg-blue-500 flex space-x-2 py-3 px-8 text-lg rounded-full font-bold text-white tracking-widest"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Say,
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Hello! 
        </motion.span>
        <LuSend className='mt-1'  />
      </motion.h1>
            </div>
            
            <div class="mt-16 lg:mt-24 flex">
                <span class="w-12 h-1 mx-1 bg-green-400"></span>
                <span class="w-12 h-1 mx-1 bg-blue-20 0"></span>
                <span class="w-12 h-1 mx-1 bg-green-200"></span>
            </div>
        </div>
        
        <div>
            <Profile/>
        </div>
    </div>
</main>
  )
}

export default FirrstPage