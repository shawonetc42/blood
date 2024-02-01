import { useEffect, useState } from 'react';
import Link from 'next/link';
import app from '../shared/FirebaseConfig';
import {
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';
import LoadingSkeleton from '../data/Skeleton';

 function bd () {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'chatgroups'));
      const postData = querySnapshot.docs.map(doc => ({
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-md">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {loading ? (
        // Render loading skeleton if loading
        <LoadingSkeleton />
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id} className="bg-white p-4 rounded-lg shadow mb-4">
              <Link href={`/${post.id}`} key={post.id}>
                
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                
              </Link>
              <div className="flex items-center mb-2">
                <img src={post.userImage} alt={post.userName} className="w-10 h-10 rounded-full mr-4" />
                <h3 className="text-md font-semibold">{post.userName}</h3>
              </div>
              <img src={post.image} alt={post.title} className="w-full h-auto mb-2 rounded-lg" />
              <p className="text-gray-600">{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default bd;
