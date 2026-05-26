function CarouselControls({ nextSlide, prevSlide }) {

  return (
    <>
      {/* PREV */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          w-[60px]
          h-[60px]
          rounded-full
          border
          border-[#d4b99b]/30
          bg-[#d4b99b]/10
          text-[#d4b99b]
          text-2xl
          z-20
          hover:scale-110
          transition
        "
      >
        ‹
      </button>

      {/* NEXT */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          w-[60px]
          h-[60px]
          rounded-full
          border
          border-[#d4b99b]/30
          bg-[#d4b99b]/10
          text-[#d4b99b]
          text-2xl
          z-20
          hover:scale-110
          transition
        "
      >
        ›
      </button>
    </>
  );
}

export default CarouselControls;