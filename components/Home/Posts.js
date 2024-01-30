import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import ReportButton from '../User/ReportButton'; 
import LikeButton from '../../components/User/like'; 
import LoadingSkeleton from './../LoadingSkeleton';
import CommentSection from './../User/CommentSection'; 
import Form from './../CreatePost/Form';

const Posts = ({ posts, onLike, onComment, onReport }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(true);
  const [replyToIndex, setReplyToIndex] = useState(null);
  const [commentsToShow, setCommentsToShow] = useState(3);
  const [loading, setLoading] = useState(true); 
  const { data: session } = useSession(); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

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

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleReplyForm = (index) => {
    setReplyToIndex(replyToIndex === index ? null : index);
  };

  const loadMoreComments = () => {
    setCommentsToShow((prev) => prev + 3);
  };

  const sortedPosts = [...posts]
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    .reverse();

  return (
    <div className="flex flex-col space-y-4">
      {loading && (
        <LoadingSkeleton/>
      )}

      {/* Render the Form component to allow creating new posts */}
      <Form />

      {!loading &&
        sortedPosts.map((post, postIndex) => (
          <div key={post.id} className="border p-4 rounded-md bg-white shadow-md">
            <div className="text-gray-600 mb-2">
              <div className="flex">
                <img src={post.userImage} alt={post.userName} className="w-8 h-8 rounded-full mr-2" />
                <Link href={`/profile/${post.userName}`}>
                  <p className="font-semibold">{post.userName}</p>
                </Link>
              </div>
            </div>

            <Link href={`/posts/${post.id}`}>
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            </Link>
            {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded" />
            ) : (
              <div className="w-full h-4 bg-gray-300 rounded mb-4"></div>
            )}
            <p className="text-gray-800 mb-4">{post.content}</p>
            <div className="flex items-center text-gray-500 space-x-4">
              <LikeButton postId={post.id} handleLike={onLike} />
              <span className="flex items-center">
                {post.likes || 0}
              </span>
              <ReportButton postId={post.id} onReport={onReport} />
            </div>
            <CommentSection
              post={post}
              showComments={showComments}
              newComment={newComment}
              commentsToShow={commentsToShow}
              session={session}
              replyToIndex={replyToIndex}
              setNewComment={setNewComment}
              handleComment={handleComment}
              toggleReplyForm={toggleReplyForm}
              loadMoreComments={loadMoreComments}
            />
          </div>
        ))}
    </div>
  );
};

export default Posts;
