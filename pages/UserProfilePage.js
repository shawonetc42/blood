// pages/UserProfilePage.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import app from '../shared/FirebaseConfig';
import {
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';

export default function UserProfilePage() {
  const router = useRouter();
  const { userName } = router.query;
  const db = getFirestore(app);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userName) {
      getUserProfile();
    }
  }, [userName]);

  const getUserProfile = async () => {
    try {
      setLoading(true);
      const userDoc = await getDoc(doc(db, 'users', userName));
      if (userDoc.exists()) {
        setUserProfile(userDoc.data());
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userProfile) {
    return <p>User not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-md">
      <h1 className="text-3xl font-bold mb-4">{userProfile.displayName}'s Profile</h1>
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <p>Email: {userProfile.email}</p>
        {/* Display other user profile information */}
      </div>
    </div>
  );
}
