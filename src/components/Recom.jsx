
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  EffectCreative ,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import axios from "axios";
import Card from "./Card";
const Recom = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

useEffect(() => {
  const fetchServices = async () => {
    try {
      const res = await axios.get("https://astra-backend-live-ver1.onrender.com/services");
      setServices(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (error) {
      console.error("Failed to fetch recommended services:", error);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  fetchServices();
}, []);

  if (loading || hasError || services.length === 0) {
    const message = loading
      ? "Loading recommended services..."
      : hasError
        ? "Recommended services are unavailable right now."
        : "No recommended services available.";

    return (
      <div
        className="flex min-h-44 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-5 text-center text-sm text-white/65"
        role={hasError ? "alert" : "status"}
      >
        {loading && (
          <span className="mr-3 h-4 w-4 animate-spin rounded-full border-2 border-[#d4b99b]/30 border-t-[#d4b99b]" />
        )}
        {message}
      </div>
    );
  }

  return (
   <div className="flex min-w-0 items-center justify-center bg-transparent">

      {/* ================= DESKTOP ================= */}
      <div className="relative hidden h-fit w-full min-w-0 bg-transparent md:block">
        <button
          className="recom-prev absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white shadow-lg backdrop-blur-sm transition hover:bg-black/60 lg:h-12 lg:w-12 lg:text-2xl"
          aria-label="Previous service"
          type="button"
        >
          ‹
        </button>

        <button
          className="recom-next absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white shadow-lg backdrop-blur-sm transition hover:bg-black/60 lg:h-12 lg:w-12 lg:text-2xl"
          aria-label="Next service"
          type="button"
        >
          ›
        </button>

        <div className="px-12">
          <Swiper
            modules={[EffectCreative, Autoplay, Navigation]}
            effect="creative"
            creativeEffect={{
              prev: {
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            navigation={{ prevEl: ".recom-prev", nextEl: ".recom-next" }}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="recom-desktop-swiper w-full"
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

      {/* ================= MOBILE ================= */}
        <div className="block w-full min-w-0 px-1 md:hidden">
       <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
  effect="fade"
  fadeEffect={{
    crossFade: true,
  }}
  grabCursor={services.length > 1}
  loop={services.length > 1}
  pagination={{ clickable: true, dynamicBullets: true }}
  autoplay={{
    delay: 4500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    stopOnLastSlide: true,
  }}
  className="recom-mobile-swiper w-full pb-8"
>
          {services.map((elem, index) => (
            <SwiperSlide key={elem.id}>
              <Card
                elem={elem}
                isMobile
                itemNumber={index + 1}
                serviceCount={services.length}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};
export default Recom