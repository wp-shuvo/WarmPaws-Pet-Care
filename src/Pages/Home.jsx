import React from 'react';
import HeroSection from '../Components/HeroSection';
import MeetOurVets from '../Components/MeetVrts';
import ReviewCard from '../Components/reviewCard';

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
        <h3 className="my-5 text-3xl font-extrabold text-[#4A2C1D] text-center  md:my-8 lg:my-12">
          Winter Care Tips for Pets
        </h3>
        <p className="mt-2 text-lg text-[#6A4E3A]  mx-auto my-5 md:text-xl  md:my-8 lg:my-12">
          When the temperature drops and the snow begins to fall, our furry
          companions need a little extra care and attention. Winter can be a
          magical season, but it also brings challenges for pets — from freezing
          temperatures to dry air and slippery sidewalks. Here are some
          essential winter care tips to help your pets stay warm, healthy, and
          happy all season long.
        </p>
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
