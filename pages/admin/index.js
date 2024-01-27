import React from 'react'

function index() {
  return (
    <div className='flex justify-center'>
        
    <section class="py-14 ml-5">
        <div class="container">

            <div class="float-right hidden sm:block">
                <img src="assets/images/trophy.png" alt="" class="h-36"/>
            </div>

            <div class="text-center max-w-md mx-auto">
                <span class="text-green-700 text-base font-medium uppercase block mb-3">Testimonials</span>
                <h1 class="text-4xl font-semibold mb-5">What People Say</h1>
                <p class="text-gray-500 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt.</p>
            </div>


            <div class="border-b my-10"></div>

            <div class="grid lg:grid-cols-2 gap-6">

                <div>
                    <div class="space-y-6">
                        <div class="bg-green-500/40 rounded-xl p-7">
                            <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                                <img src="assets/images/hourglass.png" alt="" class="h-36 mx-auto sm:me-auto"/>
                                <div class="sm:text-end">
                                    <p class="text-xl text-gray-700 font-light">In our company we believe that good design matters, it makes us better in many eays</p>

                                    <div class="flex items-center sm:justify-end gap-3 mt-5">
                                        <img src="assets/images/avatars/img-1.png" alt="" class="rounded-full h-8"/>
                                        <span class="text-gray-600 font-light text-base">Andy Bush | CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-sky-500/40 rounded-xl p-7">
                            <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                                <img src="assets/images/archery.png" alt="" class="h-36 mx-auto sm:me-auto"/>
                                <div class="sm:text-end">
                                    <p class="text-xl text-gray-700 font-light">In our company we believe that good design matters, it makes us better in many eays</p>

                                    <div class="flex items-center sm:justify-end gap-3 mt-5">
                                        <img src="assets/images/avatars/img-2.png" alt="" class="rounded-full h-8"/>
                                        <span class="text-gray-600 font-light text-base">Alex Hills | CEO Twitter</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="space-y-6 lg:mt-20">
                        <div class="bg-purple-500/40 rounded-xl p-7">
                            <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                                <img src="assets/images/speaker.png" alt="" class="h-36 mx-auto sm:me-auto"/>
                                <div class="sm:text-end">
                                    <p class="text-xl text-gray-700 font-light">In our company we believe that good design matters, it makes us better in many eays</p>

                                    <div class="flex items-center sm:justify-end gap-3 mt-5">
                                        <img src="assets/images/avatars/img-3.png" alt="" class="rounded-full h-8"/>
                                        <span class="text-gray-600 font-light text-base">Andy Bush | CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-green-500/40 rounded-xl p-7">
                            <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                                <img src="assets/images/earth.png" alt="" class="h-36 mx-auto sm:me-auto"/>
                                <div class="sm:text-end">
                                    <p class="text-xl text-gray-700 font-light">In our company we believe that good design matters, it makes us better in many eays</p>

                                    <div class="flex items-center sm:justify-end gap-3 mt-5">
                                        <img src="assets/images/avatars/img-4.png" alt="" class="rounded-full h-8"/>
                                        <span class="text-gray-600 font-light text-base">Mark Rubio | CEO TikTok</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex items-center justify-center mt-10">
                <button class="border border-green-700 text-green-700 rounded-full transition-all duration-300 hover:bg-green-700 hover:text-white px-7 py-3">Show More</button>
            </div>

        </div>
    </section>

    </div>
  )
}

export default index