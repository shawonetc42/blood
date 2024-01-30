import React from 'react';
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter();
  const { profileId } = router.query;

  // Replace 'YOUR_IMAGE_URL' with the actual URL of the image in Firebase
  const imageUrl = 'YOUR_IMAGE_URL';

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <h1 className="text-4xl font-semibold mb-8">Profile Page</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96">
        <div className="flex items-center space-x-4">
          <img
            src={imageUrl} // Use the imageUrl from Firebase
            alt="Profile Picture"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-xl font-semibold">{profileId}</p>
            <p className="text-gray-600">Web Developer</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">Bio:</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
