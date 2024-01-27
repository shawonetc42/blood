import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../Shared/FirebaseConfig';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Sliderr() {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'questionblood'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setQuestionData(data);
    });

    return () => {
      // Unsubscribe from the real-time updates when the component unmounts
      unsubscribe();
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {questionData.map((question) => (
        <div key={question.id} className="relative h-700">
          <img src={question.image} alt={question.title} className="w-full h-[700px] object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-opacity-50 bg-black">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-2">{question.title}</h2>
              <p className="text-lg">{question.discription}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Sliderr;
