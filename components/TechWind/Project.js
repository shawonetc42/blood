import React from 'react'

function Project() {
  return (
    <div class="container md:mt-24 mt-16">
    <div class="grid grid-cols-1 text-center">
        <span class="text-slate-400 mb-4">Available for freelance projects</span>
        <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project</h3>

        <div class="mt-6">
            <a href="contact-one.html" class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 
               rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
               <a class="uil uil-phone"></a> Contact us</a>
        </div>
    </div>
    {/* <!--end grid--> */}
</div>
  )
}

export default Project