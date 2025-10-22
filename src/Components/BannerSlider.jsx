import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderOne from '../assets/sliderimg1.jpeg';
import sliderTwo from '../assets/sliderimg2.jpeg';
import sliderThree from '../assets/sliderimg3.jpeg';
import sliderFour from '../assets/sliderimg4.jpeg';
function BannerSlider() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="w-80 md:w-[680px] lg:w-[980px] xl:w-[1200px] mx-auto md:h-[500px] h-64 rounded-xl"
    >
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[500px] animate__animated animate__fadeInUp"
          src={sliderOne}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[500px] animate__animated animate__fadeInUp"
          src={sliderTwo}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[500px] animate__animated animate__fadeInUp"
          src={sliderThree}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[200px] md:h-[500px] animate__animated animate__fadeInUp"
          src={sliderFour}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSlider;
