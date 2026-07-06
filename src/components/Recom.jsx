
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectCards,
  EffectFade,
  EffectCreative ,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import  { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Recom = () => {
  const [services, setServices] = useState([]);

useEffect(() => {
  const fetchServices = async () => {
    const res = await axios.get("https://astra-backend-live-ver1.onrender.com/services");
    setServices(res.data.data);
  };

  fetchServices();
}, []);
  return (
   <div className="h-fit flex items-center justify-center bg-transparent">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full h-fit bg-transparent">
       <Swiper
  modules={[EffectCreative, Autoplay]}
  effect="creative"
  creativeEffect={{
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  }}
  grabCursor={true}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
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

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden w-full px-4">
       <Swiper
  modules={[EffectFade, Autoplay]}
  effect="fade"
  fadeEffect={{
    crossFade: true,
  }}
  grabCursor={true}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  className="w-full"
>
          {services.map((elem) => (
  <SwiperSlide key={elem.id}>
    {({ isActive }) => (
      <Card elem={elem} isActive={isActive} />
    )}
  </SwiperSlide>
))}
        </Swiper>
      </div>

    </div>
  );
};
export default Recom