import React from 'react'
import FirrstPage from '../Home/FirrstPage'

function Section1bg() {
  return (
    <div>
     {/* <!-- Start Hero --> */}
     <section class="relative  bg-[url(https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg)]">
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div class="flex flex-col items-center justify-center ">
                <div class="w-[70%] md:w-[50%] lg:w-[55%]">
                <FirrstPage/>
                    <h3 class="mb-3 text-3xl leading-normal font-medium text-white">Portfolio & Works</h3>
                    
                    <p class="text-slate-300 text-lg max-w-xl mx-auto">Showcase of Our Awesome Works in Three Columns</p>
                </div>
                 {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}
            
            <div class="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
                <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                   <li class="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><a href="index.html">Shawon</a></li>
                   <li class="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><a href="">Portfolio</a></li>
                    <li class="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Classic</li>
                </ul>
            </div>
        </section>
        {/* <!--end section--> */}
        <div class="relative">
            <div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        {/* end */}
       
    </div>
  )
}

export default Section1bg