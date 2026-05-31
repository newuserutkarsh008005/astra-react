
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectCards,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

import services from "../data/services";
import Card from "./Card";
const ExploreCarousel = () => {
  return (
   <div className="h-screen flex items-center justify-center">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full min-h-[500px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 80,
            modifier: 2,
            slideShadows: false,
          }}
          className="w-full h-full"
        >
          {services.map((elem) => (
            <SwiperSlide key={elem.id}>
              {({isActive})=>(
                <Card elem={elem} isActive={isActive} />
              )}
            
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden w-full px-4">
        <Swiper
          modules={[EffectCards, Autoplay]}
          effect="cards"
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
          className="w-full"
        >
          {services.map((elem) => (
            <SwiperSlide key={elem.id}>
              {({isActive})=>(
                <Card elem={elem} isActive={isActive} />
              )}
            
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};
export default ExploreCarousel