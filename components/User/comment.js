import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({
  session,
  comment,
  userName,
  replyToIndex,
  toggleReplyForm,
  newComment,
  setNewComment,
  handleComment,
  postId,
  commentIndex
}) => {
  return (
    <div className={`flex items-start bg-gray-100 p-2 rounded mt-2 ${replyToIndex === commentIndex ? 'ml-8' : ''}`}>
      {session && session.user && (
        <img src={session.user.image} alt={session.user.name} className="w-8 h-8 rounded-full mr-2" />
      )}
      <div>
        {session && session.user && (
          <p className="text-gray-700">
            <span className="font-semibold">{session.user.name}</span>: {comment}
          </p>
        )}
        {!session && <p className="text-gray-700">{userName} {comment}</p>}
        <button onClick={() => toggleReplyForm(commentIndex)} className="text-blue-500 mt-1">
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
              onClick={() => handleComment(postId, 'reply', commentIndex)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Reply
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Comment.propTypes = {
  session: PropTypes.object,
  comment: PropTypes.string.isRequired,
  userName: PropTypes.string,
  replyToIndex: PropTypes.number.isRequired,
  toggleReplyForm: PropTypes.func.isRequired,
  newComment: PropTypes.string.isRequired,
  setNewComment: PropTypes.func.isRequired,
  handleComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  commentIndex: PropTypes.number.isRequired
};

export default Comment;
