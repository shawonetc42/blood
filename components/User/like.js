import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; // Import heart icons from react-icons
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon for animation

const LikeButton = ({ postId, handleLike }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // State to handle animation

  const handleLikeClick = async () => {
    setIsAnimating(true); // Start animation
    try {
      await handleLike(postId); // Call handleLike function
      setIsLiked(prevIsLiked => !prevIsLiked); // Toggle like status
    } catch (error) {
      console.error('Error while liking:', error);
      // Handle error gracefully, e.g., show an error message
    } finally {
      setIsAnimating(false); // Stop animation
    }
  };

  return (
    <button className="flex items-center space-x-1 cursor-pointer" onClick={handleLikeClick}>
      {isAnimating ? (
        <FaSpinner className="animate-spin" /> // Show spinner animation while liking
      ) : (
        isLiked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />
      )}
    </button>
  );
};

export default LikeButton;
