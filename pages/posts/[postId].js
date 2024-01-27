// pages/posts/[postId].js

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import firebaseApp from '../../shared/FirebaseConfig'; // Import Firebase app from the config folder

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// This function gets called at build time
export async function getServerSideProps(context) {
  // Fetch post details based on postId from URL
  const postId = context.params.postId;
  // Fetch post details from your API or database
  const postDetails = {}; // Fetch post details based on postId

  return {
    props: {
      postDetails,
    },
  };
}

const PostDetails = ({ postDetails }) => {
  const router = useRouter();
  const { postId } = router.query;

  // Render post details
  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {postId}</p>
      {/* Render other details of the post */}
    </div>
  );
};

export default PostDetails;
