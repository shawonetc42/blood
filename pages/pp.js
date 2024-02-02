import React, { useState, useEffect } from 'react';
import app from '../shared/FirebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Profile() {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false); // Update loading state when auth state changes
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-md">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {loading ? (
        <p>Loading...</p> // Show loading indicator while checking user session
      ) : user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
      ) : (
        <p>Please sign in to view your profile</p>
      )}
    </div>
  );
}

export default Profile;

