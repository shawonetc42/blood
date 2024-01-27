import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { HiOutlinePencilSquare,HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from 'next/router';
const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'
function Header() {
  const router=useRouter();
  const { data: session } = useSession();
  console.log("Session",session)


  return (
    <div>
        <div className="fixed w-full bg-red-700 flex justify-between p-3  border-b-[2px] "> 
        <Link href="/">
          <p>
            <img
              loading="lazy"
              src="logo.png"
              className="aspect-[9.2] object-contain object-center w-[276px] justify-center items-center overflow-hidden max-w-full ml-40 max-md:ml- max-sm:ml-10"
            />
          </p>
        </Link>
      <div className='flex gap-4'>
     
        </div>
      <div className='flex gap-4 mr-96 max-md:ml-2.5 max-sm:ml-48'>
      {session? <button onClick={()=>router.push('/create-post')} className='bg-gray-700 px-3
             text-white rounded-full text-[12px]'>
                <span className='hidden sm:block'>
                    CREATE POST</span> 
                    <HiOutlinePencilSquare 
                    className='sm:hidden text-[17px]' /></button>:null}
            {!session?<button className='bg-white
             text-gray-500 p-1 px-3 text-[12px] border-[1px]
             rounded-full' onClick={()=>signIn()}>
                <span className='hidden sm:block'>
                    SIGN IN</span>
                <HiArrowLeftOnRectangle
                 className='sm:hidden text-[17px]' /></button>
                 :<button className='bg-white
                 text-gray-500 p-1 px-3 text-[12px] border-[1px]
                 rounded-full' onClick={()=>signOut()}>
                    <span className='hidden sm:block'>
                        SIGN OUT</span>
                    <HiArrowLeftOnRectangle
                     className='sm:hidden text-[17px]' /></button>}
       {session?  
       <Image src={session?session?.user?.image:USER_IMAGE} alt='user image'
        className='rounded-full cursor-pointer' onClick={()=>router.push('/profile')}
        width={40} height={40} />:null}
        </div>
    </div>  
    </div>
    
  )
}

export default Header
