import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const ProfilePage = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>{postId} - Post Details </title>
      </Head>
      <h1 className="text-4xl font-semibold mb-8">Post Details</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-xl font-semibold">{postId}</p>
            <p className="text-gray-600">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
