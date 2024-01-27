import React, { useState, useEffect } from 'react';
import { db } from '../../../Shared/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const SliderCreate = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    discription: '',
    link: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [newPost]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost((prevPost) => ({
          ...prevPost,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreatePost = async () => {
    try {
      setLoading(true);
      const newPostDocumentRef = await addDoc(collection(db, 'questionblood'), newPost);
      console.log('Post created with ID:', newPostDocumentRef.id);
      setNewPost({
        title: '',
        discription: '',
        link: '',
        image: '',
      });
    } catch (error) {
      console.error('Error creating post:', error.message);
      setError('Failed to create post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4 p-4 border rounded bg-gray-100 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Question</h2>
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-2">
        Description:
        <textarea
          name="discription"
          value={newPost.discription}
          onChange={handleInputChange}
          className="w-full p-2 border rounded resize-none focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-2">
        Link:
        <input
          type="text"
          name="link"
          value={newPost.link}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block mb-2">
        Upload Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </label>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button
        onClick={handleCreatePost}
        className={`w-full p-2 rounded bg-blue-500 text-white ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
        } focus:outline-none focus:ring focus:border-blue-300`}
        disabled={loading}
      >
        {loading ? 'Creating Post...' : 'Create Post'}
      </button>
    </div>
  );
};

export default SliderCreate;
