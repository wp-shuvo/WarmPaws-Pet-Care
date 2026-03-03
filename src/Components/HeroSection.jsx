import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import sliderOne from '../assets/sliderimg1.jpeg';
import sliderTwo from '../assets/sliderimg2.jpeg';
import sliderThree from '../assets/sliderimg3.jpeg';
import sliderFour from '../assets/sliderimg4.jpeg';

const HeroSection = () => {
  const slides = [sliderOne, sliderTwo, sliderThree, sliderFour];

  const [text] = useTypewriter({
    words: [
      'Keep Your Pet Warm & Cozy',
      'Winter Care for Your Furry Friend',
      'Healthy Pets, Happy Homes',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-[80vh] overflow-hidden">
      
      {/* Background Image Slider */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={4000}
        stopOnHover={false}
      >
        {slides.map((img, i) => (
          <div key={i}>
            <img
              src={img}
              alt="Pet Winter Care"
              className="w-full h-[80vh] object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex items-center z-10">
        <div className="max-w-4xl px-6 md:px-20 text-white space-y-6">
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Pet Care in Winter
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-[#E88743]">
            {text}
            <Cursor cursorColor="#E88743" />
          </h2>

          <p className="max-w-xl text-gray-200">
            Keep your furry friend warm, safe and healthy during the cold season.
            We provide professional winter pet care services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contactus"
              className="bg-[#E88743] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#bb7440] transition"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Our Services
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;