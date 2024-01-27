import React from 'react'

function Task() {
  return (
    <div>
       
<div class="flex flex-wrap -mx-3 mb-5">
    <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 mx-auto">
        <div class="relative flex flex-col min-w-0 break-words bg-green-700 border-0 bg-clip-border rounded-2xl mb-5 draggable">
            
            <div class="flex items-end flex-auto py-8 pt-0 px-9 ">
                <div class="flex flex-col items-center w-full mt-3">
                    <div class="flex justify-between w-full mt-auto mb-2 font-semibold text-white/80 text-lg/normal">
                        <span class="mr-4">Full-Stack Project</span>
                        <span>85%</span>
                    </div>

                    <div class="mx-3 rounded-2xl h-[8px] w-full bg-white/20">
                        <div class="rounded-2xl bg-white w-[85%] h-[8px]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Task