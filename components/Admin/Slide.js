import React from 'react'
import Profile from '../Home/Profile'

function Slide() {
  return (
    <div>
        
<main class="bg-white font-open-sans">
    
    <div class="container mx-auto px-8 py-8 lg:py-40 relative flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h1 class="text-center lg:text-left text-3xl sm:text-5xl font-light text-black font-medium leading-tight mb-4"><strong class=
            "font-black text-3xl sm:text-4xl block">A full-stack developer</strong></h1>
            <p class="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">Full-stack web developers have expertise in server-side programming 
            languages and frameworks. Common back-end programming languages include Python, Ruby, Java, or Node.js.</p>
            <a href="#" class="bg-green-700 hover:bg-blue-500 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest">Apply Now</a>
            <div class="mt-16 lg:mt-24 flex">
                <span class="w-12 h-1 mx-1 bg-blue-400"></span>
                <span class="w-12 h-1 mx-1 bg-blue-20 0"></span>
                <span class="w-12 h-1 mx-1 bg-blue-200"></span>
            </div>
        </div>
        
        <div>
            <Profile/>
        </div>
    </div>
</main>
    </div>
  )
}

export default Slide