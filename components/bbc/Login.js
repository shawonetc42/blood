import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { HiOutlinePencilSquare,HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from 'next/router';
const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'
function Login() {
  const router=useRouter();
  const { data: session } = useSession();
  console.log("Session",session)


  return (
    <div className="bg-white flex flex-col justify-center items-stretch">
      <div className="shadow-sm bg-zinc-300 flex w-full flex-col items-stretch pt-1 pb-3 max-md:max-w-full">
        <div className=" overflow-hidden flex min-h-[866px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c82b3708a2cbc0486bc690b93380c7b29da036b8ff4a71d3febda516869f2d15?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c82b3708a2cbc0486bc690b93380c7b29da036b8ff4a71d3febda516869f2d15?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c82b3708a2cbc0486bc690b93380c7b29da036b8ff4a71d3febda516869f2d15?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c82b3708a2cbc0486bc690b93380c7b29da036b8ff4a71d3febda516869f2d15?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c82b3708a2cbc0486bc690b93380c7b29da036b8ff4a71d3febda516869f2d15?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c82b3708a2cbc0486bc690b93380c7b29da036b8ff4a71d3febda516869f2d15?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c82b3708a2cbc0486bc690b93380c7b29da036b8ff4a71d3febda516869f2d15?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c82b3708a2cbc0486bc690b93380c7b29da036b8ff4a71d3febda516869f2d15?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative border shadow-sm bg-white flex w-[761px] max-w-full flex-col items-stretch mt-20 mb-11 pt-4 px-8 rounded border-solid border-zinc-200 max-md:my-10">
            <div className="flex-col text-white text-center text-xs leading-5 relative whitespace-nowrap overflow-hidden self-center aspect-[1.76] w-44 max-w-full pl-16 pt-20 pb-4 items-end max-md:pl-5">
              <img
                loading="lazy"
                src="/bbc.png"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              বাংলা
            </div>
            <div className="text-stone-500 text-center text-sm leading-5 self-center max-w-[441px]">
            খবর, সর্বশেষ খবর, ব্রেকিং নিউজ - BBC News বাংলা - BBC
            </div>
            <div className="self-center flex justify-between gap-5 mt-11 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
              <div className="flex grow basis-[0%] flex-col mt-2.5">
                <div className="text-neutral-400 text-xs leading-5 self-stretch whitespace-nowrap">
                  চালিয়ে যাওয়ার মাধ্যমে আপনি BBC-এর 
                </div>
                <div className="self-stretch flex justify-between gap-0 mt-2 items-start max-md:justify-center">
                  <div className="text-neutral-400 text-xs leading-5 whitespace-nowrap mt-1">
                  ব্যবহারের শর্তাবলী এবং গোপনীয়তা নীতি - এ সম্মত হন।
                  </div>
                  <div className="text-neutral-400 text-xs leading-5 whitespace-nowrap mt-1">
                  </div>
                </div>
                <div className="border bg-white self-stretch flex items-stretch gap-0 mt-7 py-2.5 rounded border-solid border-zinc-200 max-md:justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0bb8a47e241fa1b58223392a3416df375aa50a293ec295572a254fa055e71ea?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                    className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                  />
                  <div>
                    
                  </div>
                  <button type='button' className="text-zinc-800 text-sm leading-5 self-center my-auto" onClick={()=>signIn()} >
                    Google 
                  </button>
                  <div className="text-zinc-800 text-sm leading-5 self-center whitespace-nowrap my-auto">
                    -এর সাথে চালিয়ে যান
                  </div>
                </div>
                <div className="border bg-white self-stretch flex items-stretch justify-between gap-5 mt-2 py-2.5 rounded border-solid border-zinc-200">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c29b93c17ceefeec854ecb3dae74f1404c71232fa00687e1639b2b3438d526b?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
                    className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full max-sm:w-[54px] max-sm:pl-20"
                  />
                  <div className="text-zinc-800 text-sm leading-5 self-center grow whitespace-nowrap my-auto max-sm:ml-0">
                    -এর সাথে চালিয়ে যান
                  </div>
                </div>
                <div className="text-stone-500 text-center text-xs self-center whitespace-nowrap mt-4">
                  ইমেল দিয়ে সাইনআপ করুন
                </div>
              </div>
              <div className="bg-zinc-200 self-stretch flex w-px shrink-0 h-[250px] flex-col" />
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-zinc-800 text-sm leading-5 whitespace-nowrap">
                  লগইন
                </div>
                <div className="bg-zinc-200 flex shrink-0 h-px flex-col mt-3.5" />
                <div className="text-zinc-800 text-xs leading-5 whitespace-nowrap mt-5">
                  ইমেল
                </div>
                <input className="border bg-white outline-blue-200 px-5 flex shrink-0 h-[45px] flex-col mt-2.5 rounded border-solid border-zinc-200" />
                <div className="text-zinc-800 text-xs leading-5 whitespace-nowrap mt-5">
                  পাসওয়ার্ড
                </div>
                <input type="password" className="border bg-white flex shrink-0 outline-blue-200 px-5 h-[45px] flex-col mt-2.5 rounded border-solid border-zinc-200" />
                <div className="flex items-center justify-between gap-5 mt-4">
                  <div className="text-neutral-400 text-xs leading-5 grow whitespace-nowrap my-auto">
                    পাসওয়ার্ড ভুলে গেছেন?
                  </div>
                  <div className="text-white text-center text-sm whitespace-nowrap bg-blue-600 self-stretch aspect-[1.9210526315789473] items-stretch pt-2.5 px-5 rounded-[1000px]">
                    লগইন
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="bg-zinc-100 -ml-8 -mr-8 flex items-center pl-28 pr-32  mt-3 py-5 max-md:max-w-full max-md:flex-wrap max-md:px-5 max-md:ml-8 max-md:mr-8">
              <div className="text-stone-500 text-center text-xs leading-5 whitespace-nowrap self-start">
                আমাদের সম্পর্কে
              </div>
              <div className="text-stone-500 text-center text-xs leading-5 self-start">
                কাজের সুযোগ
              </div>
              <div className="text-stone-500 text-center text-xs leading-5 self-start">
                গোপনীয়তা
              </div>
              <div className="text-stone-500 text-center text-xs leading-5 self-start">
                শর্তাবলী
              </div>
              <div className="text-stone-500 text-center text-xs leading-5 my-auto">
                যোগাযোগ
              </div>
              <div className="text-stone-500 text-center text-xs leading-5 my-auto">
                ভাষা
              </div>
              <div className="text-stone-500 text-center text-xs leading-5 my-auto">
                প্রেস
              </div>
              <div className="text-stone-500 text-center text-sm leading-5 self-start">
                © BBC, Inc.
              </div>
              <div className="text-stone-500 text-center text-xs leading-5 whitespace-nowrap my-auto">
                2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login