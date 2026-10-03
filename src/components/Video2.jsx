function VideoBackground() {
  return (
    <div
      className="
        absolute
        inset-0
        w-full
        h-full
        overflow-hidden
        bg-[#02070d]
      "
    >

      {/* =====================================================
          DESKTOP VIDEO
      ====================================================== */}

      <video
        className="
          absolute
          inset-0

          hidden
          md:block

          w-full
          h-full

          object-cover
          object-center

          scale-[1.02]
        "
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dehj18zcx/video/upload/v1780830253/newvideo_olhwr2.mp4"
          type="video/mp4"
        />
      </video>


      {/* =====================================================
          MOBILE BACKGROUND

          No video on mobile.
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          md:hidden
          bg-[#02070d]
        "
      />

    </div>
  );
}

export default VideoBackground;