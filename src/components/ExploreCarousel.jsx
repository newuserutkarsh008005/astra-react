
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

import  { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useLanguage } from "./LanguageContext";
const ExploreCarousel = () => {
  const { t } = useLanguage();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("https://astra-backend-live-ver1.onrender.com/services");
        setServices(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch services:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#111827] px-5 py-3 text-zinc-200 shadow-lg shadow-[#D4AF37]/5">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37]" />
          <span>{t("Loading services...")}</span>
        </div>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center px-4 text-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-10">
          <p className="text-lg text-zinc-300">{t("No services available.")}</p>
        </div>
      </div>
    );
  }

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
          spaceBetween={40}
          navigation
          autoplay={{
            delay: 2000,
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
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
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
export default ExploreCarousel