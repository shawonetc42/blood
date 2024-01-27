import React from 'react'

function Footer() {
  return (
    <div>
    <div className="bg-red-700 self-stretch flex w-full flex-row justify-center overflow-auto mt-20 px-16 py-4 max-md:max-w-full max-md:mt-10 max-md:px-5">
  <img
    loading="lazy"
    src="logo.png"
    className="aspect-[9.2] object-contain object-center w-[276px] justify-center items-center overflow-hidden ml-0 max-w-full max-md:ml-2.5"
  />
</div>
<div className="bg-neutral-800 self-stretch z-[1] flex mb-0 w-full flex-col items-center pt-7 pb-4 px-16 max-md:max-w-full max-md:mb-2.5 max-md:px-5">
  <div className="flex w-[1008px] max-w-full flex-col">
    <div className="text-white text-base leading-6 self-stretch max-md:max-w-full">
      যে কোন প্রশ্ন করতে পারেন
    </div>
    <div className="bg-neutral-700 self-stretch flex shrink-0 h-px flex-col mt-6 max-md:max-w-full" />
    <div className="flex w-[594px] max-w-full items-stretch justify-between gap-5 mt-5 self-start max-md:flex-wrap max-md:justify-center">
      <div className="flex grow basis-[0%] flex-col items-stretch self-start">
        <div className="text-white text-base leading-6 whitespace-nowrap">
          ব্যবহারের শর্তাবলী
        </div>
        <div className="text-white text-base leading-6 whitespace-nowrap mt-8">
          আমাদের সম্পর্কে
        </div>
      </div>
      <div className="flex basis-[0%] flex-col items-stretch self-start">
        <div className="text-white text-base leading-6 whitespace-nowrap">
          প্রিভেসি নীতি
        </div>
        <div className="text-white text-base leading-6 whitespace-nowrap mt-8">
          কুকিজ
        </div>
      </div>
      <div className="flex grow basis-[0%] flex-col items-stretch">
        <div className="text-white text-base leading-6 whitespace-nowrap">
         যোগাযোগ করুন
        </div>
        <div className="text-white text-base leading-6 mt-9">
          Do not share or sell my info
        </div>
      </div>
    </div>
    <div className="bg-neutral-700 self-stretch flex shrink-0 h-px flex-col mt-7 max-md:max-w-full" />
    <div className="self-stretch flex items-center justify-between gap-px mt-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
      <div className="text-white text-base leading-6 whitespace-nowrap my-auto">
        ©
      </div>
      <div className="text-white text-base leading-6 grow shrink basis-auto self-start max-md:max-w-full">
        2023। বাইরের কোন সাইটের তথ্যের জন্য আমরা দায়বদ্ধ নয়।
      </div>
      <div className="text-white text-base leading-6 self-stretch grow shrink basis-auto max-md:max-w-full">
        বাইরের লিংক সম্পর্কে  দৃষ্টিভঙ্গি সম্বন্ধে পড়ুন।
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer
