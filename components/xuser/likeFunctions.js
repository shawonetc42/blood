import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';

const LikeButton = ({ db, postId, posts, setPosts }) => {
  const handleLike = async (postId) => {
    try {
      const postRef = doc(db, 'chatgroups', postId);
      await updateDoc(postRef, {
        likes: posts.find(post => post.id === postId).likes + 1
      });
      // Update the local state to reflect the change in likes
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.likes + 1
          };
        }
        return post;
      }));
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };

  return (
    <button onClick={() => handleLike(postId)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
      Like
    </button>
  );
};

export default LikeButton;
