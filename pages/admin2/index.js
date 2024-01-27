import PostItem from "../../components/Home/PostItem";
import app from '../../shared/FirebaseConfig'
import { getFirestore, collection, getDocs, } from "firebase/firestore";
import { useEffect, useState } from 'react'
import PostModal from '../../components/Home/PostModal';

export default function Home() {
  const [post,setPost]=useState()
  useEffect(() => {
    console.log("Posts", posts);
  });

  const db=getFirestore(app);
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    getPost();
  },[])

  const getPost=async()=>{
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
    
   setPosts(posts=>[...posts,doc.data()]);
});
  }

  
  return (
    <div className='flex flex-col items-center 
    justify-center mt-9'>
      <div className='w-[70%] md:w-[50%] lg:w-[55%]'>
    
    
      <div>
      <PostModal post={post} />
      <div
        className="grid grid-cols-1 
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-5 mt-5 px-10"
     >
        {posts.map((item,index) => (
          <div key={index} onClick={()=>
          {window.my_modal_1.showModal();setPost(item)}}>
          <PostItem post={item} modal={true} />
          </div>
        ))}
      </div>
    </div>
       
       
       
      
      </div>
     
    </div>
  )
}
