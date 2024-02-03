import { useEffect, useState } from 'react';
import app from '../shared/FirebaseConfig';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import Posts from '../components/Home/Posts';
import Head from 'next/head';

export default function Home() {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async (searchQuery = '') => {
    try {
      setLoading(true);
      let q;
      if (searchQuery) {
        q = query(collection(db, 'admin'), where('title', '>=', searchTerm));
      } else {
        q = collection(db, 'chatgroups');
      }

      const querySnapshot = await getDocs(q);
      const postData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    getPosts(searchTerm);
  };

  const handleLike = async (postId) => {
    try {
      const postRef = doc(db, 'chatgroups', postId);
      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const currentLikes = postDoc.data().likes || 0;
        await updateDoc(postRef, { likes: currentLikes + 1 });
        // Fetch posts again to update the state
        getPosts();
      }
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  const handleComment = async (postId, newComment) => {
    try {
      const postRef = doc(db, 'chatgroups', postId);
      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const currentComments = postDoc.data().comments || [];
        const updatedComments = [...currentComments, newComment];

        await updateDoc(postRef, { comments: updatedComments });
        // Fetch posts again to update the state
        getPosts();
      }
    } catch (error) {
      console.error('Error updating comments:', error);
    }
  };

  return (
    <div className='flex items-center justify-center'>
    <Head>
        <title>Home - Your Website Title</title> {/* Update with your website title */}
        <meta name="description" content="Your website description here." /> {/* Update with your website description */}
        {/* Add more SEO metadata as needed */}
      </Head>
      <div className="w-[542px] mt-14">
        <Posts posts={posts} onLike={handleLike} onComment={handleComment} />
      </div>
    </div>
  );
}
