import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import Link from 'next/link'; // Import Link from next/link

const Posts = ({ posts, onLike, onComment }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(true);
  const [replyToIndex, setReplyToIndex] = useState(null);
  const [commentsToShow, setCommentsToShow] = useState(3);
  const [loading, setLoading] = useState(true); // Add loading state
  const { data: session } = useSession(); // Get user session information

  // Simulate loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleComment = (postId, commentType, parentId = null) => {
    const currentTime = getCurrentTime();
    const timestampedComment = `${newComment} - ${currentTime}`;
    onComment(postId, timestampedComment, commentType, parentId);
    setNewComment('');
    setReplyToIndex(null);
  };

  const handleImpression = (postId) => {
    // Call a function or API to track impressions
    console.log(`Post with ID ${postId} viewed.`);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleReplyForm = (index) => {
    setReplyToIndex(replyToIndex === index ? null : index);
  };

  const loadMoreComments = () => {
    setCommentsToShow((prev) => prev + 3);
  };

  // Sort posts based on the order date in descending order
   const sortedPosts = [...posts]
  .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  .reverse();

  return (
    <div className="flex flex-col space-y-4">
      {loading && (
        <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
          <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
          <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
          <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
        </div>
      )}

      {!loading &&
        sortedPosts.map((post, postIndex) => (
          <div key={post.id} className="border p-4 rounded-md bg-white shadow-md">
            {/* Post Username */}
            <div className="text-gray-600 mb-2">
            <div className="flex ">
            <img
                          src={post.userImage}
                          alt={post.userName}
                          className="w-8 h-8 rounded-full mr-2"
                        />
            <span className="font-semibold">{post.userName}</span>
            </div>
            
            </div>
           
            {/* Wrap post title in Link */}
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            </Link>
            {post.image ? ( // Check if the image is available
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded" />
            ) : (
              <div className="w-full h-4 bg-gray-300 rounded mb-4"></div> // Placeholder if image is not available
            )}
            <p className="text-gray-800 mb-4">{post.content}</p>
            <div className="flex items-center text-gray-500 space-x-4">
              <button
                className="flex items-center cursor-pointer"
                onClick={() => {
                  onLike(post.id);
                  handleImpression(post.id);
                }}
              >
                <FaThumbsUp className="mr-1" />
                Like {post.likes || 0}
              </button>

              <button
                className="flex items-center cursor-pointer"
                onClick={() => {
                  toggleComments();
                  handleImpression(post.id);
                }}
              >
                <FaComment className="mr-1" />
                Comment {post.comments ? post.comments.length : 0}
              </button>
            </div>
            <div className={`mt-4 ${showComments ? 'block' : 'hidden'}`}>
              {/* Comment Box */}
              <div className="flex items-center space-x-4 mt-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="border p-2 w-full rounded"
                />
                <button
                  onClick={() => handleComment(post.id, 'comment')}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Comment
                </button>
              </div>
              {/* Comments */}
              <div className="mt-2 text-gray-600">
                {post.comments &&
                  [...post.comments].reverse().slice(0, commentsToShow).map((comment, commentIndex) => (
                    <div
                      key={commentIndex}
                      className={`flex items-start bg-gray-100 p-2 rounded mt-2 ${
                        replyToIndex === commentIndex ? 'ml-8' : ''
                      }`}
                    >
                      {session && session.user && (
                        <img
                          src={session.user.image}
                          alt={session.user.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                      )}
                      <div>
                        {session && session.user && (
                          <p className="text-gray-700">
                            <span className="font-semibold">{session.user.name}</span>: {comment}
                          </p>
                        )}
                        {!session && (
                          <p className="text-gray-700">{post.userName} {comment}</p>
                        )}
                        <button
                          onClick={() => toggleReplyForm(commentIndex)}
                          className="text-blue-500 mt-1"
                        >
                          Reply
                        </button>
                        {replyToIndex === commentIndex && (
                          <div className="mt-2">
                            <input
                              type="text"
                              placeholder="Write a reply..."
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              className="border p-2 w-full rounded"
                            />
                            <button
                              onClick={() => handleComment(post.id, 'reply', commentIndex)}
                              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                            >
                              Reply
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                {post.comments && post.comments.length > commentsToShow && (
                  <div className="text-blue-500 cursor-pointer" onClick={loadMoreComments}>
                    {showComments ? 'Show More Comments' : 'Hide Comments'}
                  </div>
                )}
                <div className="mt-2"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
