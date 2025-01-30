'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewHeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="relative w-full h-screen">
      {/* Large screen slides */}
      <div className="hidden lg:block">
        <Slider {...settings}>
          <img src="/images/LB1.png" alt="Large Display 1" className="w-full h-full object-cover" />
          <img src="/images/LB2.png" alt="Large Display 2" className="w-full h-full object-cover" />
          </Slider>
      </div>

      {/* Mobile screen slides */}
      <div className="block lg:hidden">
        <Slider {...settings}>
          <img src="/images/MB1.png" alt="Mobile Display 1" className="w-full h-full object-cover" />
          <img src="/images/MB2.png" alt="Mobile Display 2" className="w-full h-full object-cover" />
          </Slider>
      </div>
    </div>
  );
};

export default NewHeroSection;
