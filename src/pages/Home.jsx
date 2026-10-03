import PageWrapper from "../components/PageWrapper";
import HomeHero from "../components/HomeHero";
import FloatingStats from "../components/FloatingStats";
import ScrollIndicator from "../components/ScrollIndicator";
import Chatbot from "../components/Chatbot";
import { useRef, useEffect } from "react";

function Home() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const startDelay = window.setTimeout(() => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.playbackRate = 0.6;
        desktopVideoRef.current.play().catch(() => {});
      }

      if (mobileVideoRef.current) {
        mobileVideoRef.current.playbackRate = 0.6;
        mobileVideoRef.current.play().catch(() => {});
      }
    }, 500);

    return () => window.clearTimeout(startDelay);
  }, []);

  return (
    <PageWrapper>

      <div
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#010103]
          text-white
        "
      >

        {/* =================================================
            DESKTOP BACKGROUND
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            hidden
            md:block
            overflow-hidden
          "
        >
          <video
            ref={desktopVideoRef}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
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
        </div>


        {/* =================================================
            MOBILE BACKGROUND
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            block
            md:hidden
            overflow-hidden
          "
        >
          <video
            ref={mobileVideoRef}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
            "
            loop
            muted
            playsInline
            preload="auto"
          >
            <source
              src="https://res.cloudinary.com/dehj18zcx/video/upload/v1779959160/video_e12f67.mp4"
              type="video/mp4"
            />
          </video>

          {/* Mobile readability overlay */}
          <div
            className="
              absolute
              inset-0
              bg-black/30
            "
          />
        </div>


        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative z-20">

          <HomeHero />

          <Chatbot />

          <FloatingStats />

          <ScrollIndicator />

        </div>

      </div>

    </PageWrapper>
  );
}

export default Home;