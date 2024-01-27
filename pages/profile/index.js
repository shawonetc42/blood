import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import app from '../../shared/FirebaseConfig';
import { collection, deleteDoc, doc, getDocs, getFirestore, query, where, updateDoc } from 'firebase/firestore';
import PostItem from '../../components/Home/PostItem';
import Toast from '../../components/Toast';

function Profile() {
  const { data: session } = useSession();
  const [userPost, setUserPost] = useState([]);
  const db = getFirestore(app);
  const [showToast, setShowToast] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [editItemContent, setEditItemContent] = useState('');

  useEffect(() => {
    getUserPost();
  }, [session, showToast]);

  const getUserPost = async () => {
    setUserPost([]);
    if (session?.user.email) {
      const q = query(collection(db, 'chatgroups'), where('email', '==', session?.user.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        setUserPost((userPost) => [...userPost, data]);
      });
    }
  };

  const onDeletePost = async (id) => {
    await deleteDoc(doc(db, 'chatgroups', id));
    setShowToast(true);
    window.location.reload();
  };

  const onEditPost = (id, title) => {
    setEditItemId(id);
    setEditItemContent(title);
  };

  const onCancelEdit = () => {
    setEditItemId(null);
    setEditItemContent('');
  };

  const onSaveEdit = async (id) => {
    const postRef = doc(db, 'chatgroups', id);
    await updateDoc(postRef, { title: editItemContent });
    setShowToast(true);
    setEditItemId(null);
    setEditItemContent('');
    window.location.reload();
  };

  return (
    <div className='p-6 mt-8'>
      {showToast ? (
        <div className='absolute top-10 right-10'>
          <Toast msg={'Post Deleted Successfully'} closeToast={() => setShowToast(false)} />
        </div>
      ) : null}
      <h2 className='text-[35px] font-extrabold text-blue-500'>Profile</h2>
      
      <p>Manage Your Post</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-10'>
        {userPost &&
          userPost?.map((item, index) => (
            <div key={index}>
              {editItemId === item.id ? (
                <div>
                  <textarea
                    className='w-full h-24 p-2 border border-gray-300 rounded'
                    value={editItemContent}
                    onChange={(e) => setEditItemContent(e.target.value)}
                  />
                  <div className='flex justify-between'>
                    <button className='bg-green-400 w-full p-1 mt-1 rounded-md text-white' onClick={() => onSaveEdit(item.id)}>
                      Save
                    </button>
                    <button className='bg-gray-400 w-full p-1 mt-1 rounded-md text-white' onClick={onCancelEdit}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <PostItem post={item} modal={true} />
                  <div className='flex justify-between'>
                    <button
                      className='bg-red-400 w-full p-1 mt-1 rounded-md text-white'
                      onClick={() => onDeletePost(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className='bg-blue-400 w-full p-1 mt-1 rounded-md text-white'
                      onClick={() => onEditPost(item.id, item.title)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Profile;
