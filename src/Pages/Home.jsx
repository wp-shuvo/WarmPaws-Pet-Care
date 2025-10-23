import React from 'react';
import HeroSection from '../Components/HeroSection';
import MeetOurVets from '../Components/MeetVrts';
import ReviewCard from '../Components/reviewCard';
import WinterCareTips from '../Components/WinterCareTips';
import ServicesHome from '../Components/Services/ServicesHome';

const Home = () => {
  return (
    <div className="text-[#4A2C1D] px-4 md:px-10 lg:px-32 py-4 md:py-5 lg:py-10 ">
      <div>
        <HeroSection />
      </div>
      <div className="mt-7">
        <ServicesHome />
      </div>
      {/* Winter Care Tips for Pets Section */}
      <div>
        <WinterCareTips />
      </div>
      {/*  */}
      <div>
        <MeetOurVets />
      </div>
      {/*  */}
      <div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default Home;
