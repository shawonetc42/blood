// CommentSection.js
import React from 'react';
import Comment from '../../components/User/comment';

const CommentSection = ({
  post,
  showComments,
  newComment,
  commentsToShow,
  session,
  replyToIndex,
  setNewComment,
  handleComment,
  toggleReplyForm,
  loadMoreComments,
}) => {
  return (
    <div className={`mt-4 ${showComments ? 'block' : 'hidden'}`}>
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
      <div className="mt-2 text-gray-600">
        {post.comments &&
          [...post.comments].reverse().slice(0, commentsToShow).map((comment, commentIndex) => (
            <Comment
              key={commentIndex}
              session={session}
              comment={comment}
              userName={post.userName}
              replyToIndex={replyToIndex}
              toggleReplyForm={toggleReplyForm}
              newComment={newComment}
              setNewComment={setNewComment}
              handleComment={handleComment}
              postId={post.id}
              commentIndex={commentIndex}
            />
          ))}
        {post.comments && post.comments.length > commentsToShow && (
          <div className="text-blue-500 cursor-pointer" onClick={loadMoreComments}>
            {showComments ? 'Show More Comments' : 'Hide Comments'}
          </div>
        )}
        <div className="mt-2"></div>
      </div>
    </div>
  );
};

export default CommentSection;
