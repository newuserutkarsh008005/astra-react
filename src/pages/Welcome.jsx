import PageWrapper from "../components/PageWrapper";

import HomeHero from "../components/HomeHero";
import FloatingStats from "../components/FloatingStats";
import ScrollIndicator from "../components/ScrollIndicator";
import Chatbot from "../components/Chatbot";

import { useRef, useEffect } from "react";

function Welcome() {
  const videoRef = useRef(null);

  const url = "https://version1-1-c962.onrender.com/chat";

  // =========================================================
  // API TEST
  // =========================================================
  useEffect(() => {
    async function apis() {
      try {
        console.log("1. Fetch starting...");

        const resp = await fetch(url);

        console.log("2. Response status:", resp.status);

        const data = await resp.json();

        console.log("3. Data received:", data);
      } catch (error) {
        console.error("4. Fetch failed completely:", error);
      }
    }

    apis();
  }, []);

  // =========================================================
  // SLOW DOWN DESKTOP VIDEO
  // =========================================================
  useEffect(() => {
    const startDelay = window.setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.6; // slow motion
        videoRef.current.play().catch(() => {});
      }
    }, 500);

    return () => window.clearTimeout(startDelay);
  }, []);

  return (
    <PageWrapper>

      <div
        className="
          relative
          z-0
          min-h-screen
          w-full
          overflow-hidden
          bg-[#010103]
          text-white
        "
      >

        {/* =====================================================
            DESKTOP VIDEO BACKGROUND

            Video exists only on desktop.
            Hidden below 768px using CSS.
        ====================================================== */}

        <div className="desktop-video-background">

          <video
            ref={videoRef}
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

          {/* Dark overlay */}
          <div className="desktop-video-overlay" />

        </div>


        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-20">

          <HomeHero />

          <Chatbot />

          <FloatingStats />

          <ScrollIndicator />

        </div>

      </div>


      {/* =======================================================
          MOBILE VIDEO CSS

          This guarantees the video disappears below 768px.
      ======================================================== */}

      <style>{`

        /* ============================================
           DESKTOP VIDEO
        ============================================ */

        .desktop-video-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .desktop-video-background video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .desktop-video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.20);
          pointer-events: none;
        }


        /* ============================================
           MOBILE
           
           Completely remove the video layer.
        ============================================ */

        @media (max-width: 767px) {

          .desktop-video-background {
            display: none !important;
          }

        }

      `}</style>

    </PageWrapper>
  );
}

export default Welcome;