import React from 'react'

function index() {
  return (
    <div className="items-stretch bg-red-700 flex max-w-[480px] h-1 w-full flex-col mx-auto pb-12">
       <div className="flex  items-stretch justify-between gap-10">
      <div className="flex items-stretch justify-between gap-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/474989cac161c5d29b39677aa530f69bf473e8c7871926e08e1e38ad692830af?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-square object-contain object-center w-8 shrink-0"
        />
        <div className="flex w-[111px] shrink-0 h-[27px] flex-col mt-1 self-start" />
      </div>
      <div className="flex items-stretch justify-between gap-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa3de8f1945904d706414389019523994775aa51dec9733453c65f082741610?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-square object-contain object-center w-[21px] shrink-0 my-auto"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a736572a403229b19f1dfaf5c5580217b0abf681d7b0da2a806774a318c678?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-[2.27] object-contain object-center w-[72px] justify-center items-start shrink-0"
        />
      </div>
    </div>
      
    </div>
  )
}

export default index