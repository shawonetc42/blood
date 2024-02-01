// LikeButton.js
import React, { useState } from 'react';

const LikeButton = ({ postId, initialLikes, handleLike }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleClick = async () => {
    try {
      await handleLike(postId);
      setLikes(prevLikes => prevLikes + 1); // Update local state for instant feedback
    } catch (error) {
      console.error('Error handling like:', error);
    }
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
      Like ({likes})
    </button>
  );
};

export default LikeButton;
