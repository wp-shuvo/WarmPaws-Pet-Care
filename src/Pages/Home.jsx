import React from 'react';
import HeroSection from '../Components/HeroSection';
import MeetOurVets from '../Components/MeetVrts';
import ReviewCard from '../Components/reviewCard';
import WinterCareTips from '../Components/WinterCareTips';

const Home = () => {
  return (
    <div className="text-[#4A2C1D] px-4 md:px-10 lg:px-32 py-4 md:py-5 lg:py-10 ">
      <HeroSection />
      <div>
        <h2 className="text-center my-5 text-2xl font-bold md:text-4xl lg:text-5xl  md:my-8 lg:my-12">
          Popular Winter Care Services
        </h2>
        <div>{/* Winter Care card */}</div>
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
