import { useEffect, useState } from 'react';
import app from '../shared/FirebaseConfig';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

// Loading skeleton component
const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse bg-gray-200 rounded-lg p-4 mb-4">
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-10 w-10 bg-gray-300 rounded-full mr-4"></div> {/* Placeholder for profile image */}
      <div className="h-40 bg-gray-300 rounded mb-2"></div> {/* Placeholder for post image */}
    </div>
  );
};

const Profile = ({ username }) => {
  const db = getFirestore(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData();
  }, [username]);

  const getUserData = async () => {
    try {
      setLoading(true);
      const userQuery = query(collection(db, 'users'), where('username', '==', username));
      const querySnapshot = await getDocs(userQuery);
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        setUser(userData);
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        // Render loading skeleton if loading
        <LoadingSkeleton />
      ) : user ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{user.displayName}'s Profile</h1>
          <div className="flex items-center mb-4">
            <img src={user.profileImage} alt={user.displayName} className="w-20 h-20 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{user.displayName}</h2>
              <p className="text-gray-600">@{user.username}</p>
            </div>
          </div>
          <p className="text-gray-600">Bio: {user.bio}</p>
          {/* You can add more user information here */}
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">User not found</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
