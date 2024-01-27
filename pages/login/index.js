import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import Image from 'next/image'

const USER_IMAGE =
  'https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg';

function LoginPage () {
  const router = useRouter();
  const { data: session } = useSession();

  return (
      
      <div className="flex gap-4 items-center">
        {!session ? (
          <button
            className=""
            onClick={() => signIn()}
          >
            <span className="bg-[#D02828] text-white text-sm font-bold leading-5 capitalize whitespace-nowrap px-7 py-4 rounded-full self-start">
          <a href="/login">Log in</a>
        </span>
          </button>
        ) : (
          <button
            className="bg-white text-gray-500 p-1 px-3 text-[12px] border-[1px] rounded-full"
            onClick={() => signOut()}
          >
            <span className="hidden sm:block">SIGN OUT</span>
            <HiArrowLeftOnRectangle className="sm:hidden text-[17px]" />
          </button>
        )}
        {session ? (
          // Use next/image for user image
          <Image
            src={session ? session?.user?.image : USER_IMAGE}
            alt="user image"
            className="rounded-full cursor-pointer"
            onClick={() => router.push('/dashboard')}
            width={40}
            height={40}
          />
        ) : null}
      </div>
  );
}

export default LoginPage;
