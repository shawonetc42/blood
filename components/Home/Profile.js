import React from 'react'
import Task from './Task'
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';

function Profile() {
  return (
    <div>
       
<div class="w-full">
    <div class="relative w-96 h-auto bg-[#1C150A] rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
        <div class="absolute rounded-full bg-gray-100  w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
            <div class="rounded-full bg-black w-full h-full overflow-auto">
                <img src="https://avatars.githubusercontent.com/u/139037447?s=400&u=c3f48c38cd933334e1a35089941c77a02f475f00&v=4"/>
            </div>
        </div>
        <label class="font-bold text-gray-100 text-lg">
            Rakibul Hasan Shawon
        </label>
        <p class="text-center text-gray-200 mt-2 leading-relaxed">
        A full-stack developer is a professional who has expertise in both front-end and back-end web development.
        </p>
        
        <ul class="flex flex-row gap-1 mt-4">
        
              
                <a href="https://facebook.com/shawonetc" target="_blank">
                    <svg class="h-10 w-10 text-gray-300 hover:text-gray-100 transition">
                    <BsFacebook />
                    </svg>
                </a>
             
                <a href="https://www.instagram.com/shawonetc" target="_blank">
                    <svg class="h-10 w-10 text-gray-300 hover:text-gray-100 transition">
                       <BsInstagram />
                    </svg>
                </a>
               
                <a href="https://github.com/shawonetc" target="_blank">
                    <svg class="h-10 w-10 text-gray-300 hover:text-gray-100 transition" >
                        <BsGithub/>
                    </svg>
                </a>
        </ul>
    </div>
</div>
    </div>
  )
}

export default Profile