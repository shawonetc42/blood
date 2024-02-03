import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head'; // Import Head for managing SEO metadata
import app from '../../shared/FirebaseConfig';
import {
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';

export default function PostDetails() {
  const router = useRouter();
  const { postId } = router.query;
  const db = getFirestore(app);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (postId) {
      getPost();
    }
  }, [postId]);

  const getPost = async () => {
    try {
      setLoading(true);
      const postDoc = await getDoc(doc(db, 'chatgroups', postId));
      if (postDoc.exists()) {
        setPost(postDoc.data());
      } else {
        console.error('Post not found');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-md">
      <Head>
        <title>{post.title}</title> {/* Update title dynamically */}
      </Head>
      {post.title && Array.isArray(post.title) && post.title.map((user, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{Object.keys(user)[0]}</p>
              <ul className="list-disc ml-4">
                {user[Object.keys(user)[0]].map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <img src={post.userImage} alt={post.title} className="w-[40px] h-[40px] mb-2 rounded-lg" />
        {/* Link to the user's profile page */}
        <Link href={`/${post.userName}`}>
          <p className="text-lg font-semibold mb-2">{post.userName}</p>
          <p className="text-lg font-semibold mb-2">{post.email}</p>
        </Link>

        <p className="text-gray-600">{post.bio}</p>
      </div>
    </div>
  );
}
