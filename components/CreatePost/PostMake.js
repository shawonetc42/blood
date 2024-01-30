import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import app from '../../shared/FirebaseConfig';

function PostMake() {
  const [newPostContent, setNewPostContent] = useState('');
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);

  const handlePostSubmit = async () => {
    try {
      setLoading(true);
      // Add the new post to the Firestore database
      const docRef = await addDoc(collection(db, 'posts'), {
        content: newPostContent,
        timestamp: new Date(),
        // Add additional fields as needed (e.g., user ID, username)
      });
      console.log('Document written with ID: ', docRef.id);
      // Clear the textarea after submission
      setNewPostContent('');
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <textarea
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
        placeholder="Write your post here..."
        className="w-full h-24 p-2 border border-gray-300 rounded"
      ></textarea>
      <button
        onClick={handlePostSubmit}
        disabled={loading || !newPostContent.trim()} // Disable button if textarea is empty or loading
        className={`mt-2 bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Posting...' : 'Post'}
      </button>
    </div>
  );
}

export default PostMake;
