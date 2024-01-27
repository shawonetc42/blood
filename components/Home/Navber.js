import React from 'react'

function Navber() {
  return (
    <div>
        <header class="h-24 sm:h-32 flex items-center">
            <div class="container mx-auto pl-8 flex items-center justify-between">
                <div class="uppercase text-blue-700 flex flex-col items-center">
                    <div class="text-2xl">Logo<strong class="font-bold">Company</strong></div>
                    <small class="tracking-widest">Your tagline goes here</small>
                </div>
                <div class="flex items-center">
                    <nav class="text-gray-900 tracking-widest text-sm font-bold lg:flex items-center hidden uppercase">
                        <a href="#" class="py-2 px-8 hover:underline">
                            Home
                        </a>
                        <a href="#" class="py-2 px-8 hover:underline">
                            Services
                        </a>
                        <a href="#" class="py-2 px-8 hover:underline">
                            About
                        </a>
                        <a href="#" class="py-2 px-8 hover:underline">
                            Contact
                        </a>
                        <a href="#" class="py-2 px-8 hover:underline">
                            FAQ
                        </a>
                    </nav>
                    <button class="ml-4 w-6 h-6 flex flex-col lg:hidden mr-8">
                        <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                        <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                        <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                    </button>
                </div>
            </div>
       </header>
    </div>
  )
}

export default Navber