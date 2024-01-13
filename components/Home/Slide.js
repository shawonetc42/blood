// MySlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slidesData from '../../data/slidesData';


const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} className="relative h-700">
          <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-[700px] object-cover" />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-opacity-50 bg-black">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default MySlider;
