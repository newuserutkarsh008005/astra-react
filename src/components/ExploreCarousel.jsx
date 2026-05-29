import {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import services from "../data/services";

import ExploreCard from "./ExploreCard";
import CarouselControls from "./CarouselControls";
import ExploreModal from "./ExploreModal";

function ExploreCarousel() {

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [paused, setPaused] =
    useState(false);

  const [
    selectedService,
    setSelectedService,
  ] = useState(null);

  // NEXT
  const nextSlide = () => {

    setCurrentIndex((prev) =>

      prev === services.length - 1
        ? 0
        : prev + 1

    );
  };

  // PREV
  const prevSlide = () => {

    setCurrentIndex((prev) =>

      prev === 0
        ? services.length - 1
        : prev - 1

    );
  };

  // AUTOPLAY
  useEffect(() => {

    // STOP AUTOPLAY
    if (paused || selectedService) return;

    const interval = setInterval(() => {

      nextSlide();

    }, 2500);

    return () => clearInterval(interval);

  }, [paused, selectedService]);

  // DRAG / SWIPE
  const handleDragEnd = (
    event,
    info
  ) => {

    if (info.offset.x < -100) {
      nextSlide();
    }

    if (info.offset.x > 100) {
      prevSlide();
    }
  };

  // card width and gap must match CSS in ExploreCard (min/max width and `gap-8`)
  const CARD_WIDTH = 320;
  const GAP = 32; // tailwind gap-8 = 2rem = 32px
  const slideOffset = currentIndex * (CARD_WIDTH + GAP);

  return (

    <>
      {/* MODAL */}
      <ExploreModal

        selectedService={
          selectedService
        }

        setSelectedService={
          setSelectedService
        }

      />

      {/* CAROUSEL */}
      <div

        className="
          relative
          w-full
          overflow-visible
          py-24
        "

        onMouseEnter={() =>
          setPaused(true)
        }

        onMouseLeave={() =>
          setPaused(false)
        }
      >

        {/* GLOW */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[650px]
            h-[650px]
            rounded-full
            bg-[#d4b99b]/10
            blur-[160px]
            pointer-events-none
          "
        />

        {/* CONTROLS */}
        <CarouselControls
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />

        {/* TRACK */}
        <motion.div

          drag="x"

          dragConstraints={{
            left: 0,
            right: 0,
          }}

          onDragEnd={handleDragEnd}

          className="flex items-center gap-8 cursor-grab active:cursor-grabbing px-6 md:px-[20vw]"

          animate={{ x: `-${slideOffset}px` }}

          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >

          {services.map((
            service,
            index
          ) => (

            <motion.div

              key={service.id}

              animate={{
                scale:
                  currentIndex === index
                    ? 1.08
                    : 0.88,

                opacity:
                  currentIndex === index
                    ? 1
                    : 0.35,

                filter:
                  currentIndex === index
                    ? "blur(0px)"
                    : "blur(1px)",
              }}

              transition={{
                duration: 0.6,
              }}
            >

              <ExploreCard

                service={service}

                setSelectedService={
                  setSelectedService
                }

              />

            </motion.div>

          ))}

        </motion.div>

      </div>
    </>
  );
}

export default ExploreCarousel;