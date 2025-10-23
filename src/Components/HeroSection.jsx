import React from 'react';
import { Link } from 'react-router';
import HeroImage from '../assets/hero image.png';
import BannerSlider from './BannerSlider';

const HeroSection = () => {
  return (
    <div className="text-[#4A2C1D] flex flex-col-reverse xl:flex-row items-center justify-between ">
      <div className="text-center xl:text-left mt-8 lg:mt-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 leading-tight">
          Pet Care <br /> in Winter
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-3xl font-semibold mb-5">
          Keep Your Furry Friend Warm, Safe And{' '}
          <br className="hidden sm:block" /> Healthy During The Cold Season
        </p>
        <div className="flex flex-col sm:flex-row justify-center xl:justify-start  items-center gap-3">
          <Link
            to="/contactus"
            className="btn bg-[#E88743] shadow-xl hover:bg-[#bb7440] hover:cursor-pointer font-bold w-full sm:w-auto"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="btn btn-outline shadow-xl hover:bg-[#E88743] hover:cursor-pointer font-bold w-full sm:w-auto"
          >
            Our Services
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center xl:w-1/2">
        <BannerSlider />
      </div>
      {/* Popular Winter Care Services Section */}
    </div>
  );
};

export default HeroSection;
