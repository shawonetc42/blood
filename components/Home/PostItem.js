

import React, { useState, useEffect } from 'react';
import app from "../../shared/FirebaseConfig";
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineArrowCircleRight } from 'react-icons/hi';
import UserInfo from './UserInfo';
import LoadingSkeleton from '../LoadingSkeleton';
import {db, doc, getDoc,  setDoc, updateDoc, collection, addDoc,  getFirestore, } from 'firebase/firestore'; // Import necessary Firestore functions

const PLACEHOLDER = './Images/placeholder.jpg';

function PostItem({ post, modal = false }) {
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const db = getFirestore(app);
  // Incorrect: Passing a string directly instead of using firestore.collection()


  const postsRef = collection(db, 'admin');


  useEffect(() => {
    const fetchRating = async () => {
      // Check if admin exists and has an id property
      if (post && post.id) {
        // Fetch the rating from Firestore
        const postDoc = doc(db, 'admin', post.id); // Replace 'posts' with your Firestore collection name
        const postSnapshot = await getDoc(postDoc);
      }
  
      setLoading(false);
    };
  
    fetchRating();
  }, 
  ); // Remove post.id from the dependency array


  return (
    <div className="">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        
        <div>
         <div className="px-50">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col max-md:max-w-full max-md:mt-4">
            <div className="flex items-stretch gap-2.5 self-start">
            </div>
            <img
              loading="lazy" 
              src={post?.image || PLACEHOLDER}   className="aspect-[1.78] object-contain object-center w-full overflow-hidden self-stretch mt-9 max-md:max-w-full"
            />
            <div className="text-neutral-900 text-3xl leading-10 self-stretch mt-2.5 max-md:max-w-full">
            {post?.title}
            </div>
            <div className="text-neutral-900 text-lg leading-8 self-stretch mt-6 max-md:max-w-full">
            
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
    </div>
      )}
      
    </div>
  );
}

export default PostItem;
