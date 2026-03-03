import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderOne from '../assets/sliderimg1.jpeg';
import sliderTwo from '../assets/sliderimg2.jpeg';
import sliderThree from '../assets/sliderimg3.jpeg';
import sliderFour from '../assets/sliderimg4.jpeg';

function BannerSlider() {
  return (
    <div className="w-full max-w-[1200px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        transitionTime={500}
        className="banner-carousel"
      >
        <div className="relative h-64 md:h-[500px]">
          <img className="object-cover w-full h-full" src={sliderOne} alt="Pet care 1" />
          <div className="absolute bottom-10 left-10 text-left bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h3 className="text-white text-2xl font-bold">Premium Pet Services</h3>
          </div>
        </div>
        <div className="relative h-64 md:h-[500px]">
          <img className="object-cover w-full h-full" src={sliderTwo} alt="Pet care 2" />
          <div className="absolute bottom-10 left-10 text-left bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h3 className="text-white text-2xl font-bold">Expert Vet Care</h3>
          </div>
        </div>
        <div className="relative h-64 md:h-[500px]">
          <img className="object-cover w-full h-full" src={sliderThree} alt="Pet care 3" />
          <div className="absolute bottom-10 left-10 text-left bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h3 className="text-white text-2xl font-bold">Warm Winter Beds</h3>
          </div>
        </div>
        <div className="relative h-64 md:h-[500px]">
          <img className="object-cover w-full h-full" src={sliderFour} alt="Pet care 4" />
          <div className="absolute bottom-10 left-10 text-left bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h3 className="text-white text-2xl font-bold">Healthy Diet Plans</h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default BannerSlider;
