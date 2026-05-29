import PageWrapper from "../components/PageWrapper";

import HomeHero from "../components/HomeHero";
import FloatingStats from "../components/FloatingStats";
import ScrollIndicator from "../components/ScrollIndicator";
import SpaceScene from "../components/SpaceScene";
import Chatbot from "../components/Chatbot";
import { useRef, useEffect } from "react";
import { log } from "three";
function Welcome() {
  const videoRef = useRef(null);
  const url="https://version1-1-c962.onrender.com/chat"
useEffect(function() {
  async function apis() {
    try {
      console.log("1. Fetch starting..."); // Check if function runs
      
      if (!url) {
        console.error("Error: 'url' variable is undefined!");
        return;
      }

      const resp = await fetch(url);
      console.log("2. Response status:", resp.status); // Check HTTP status
      
      const data = await resp.json();
      console.log("3. Data received:", data); // Check final data
      
    } catch (error) {
      console.error("4. Fetch failed completely:", error); // Catch network errors
    }
  } 

  apis(); 
}, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // slow motion
    }
  }, []);
  return (
    
    <PageWrapper>
      
        <div
          className=" bgimg
          relative
          min-h-screen
          overflow-hidden
          bg-[#010103]
          text-white
        "
        >
          <div className="videfor absolute h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
  ref={videoRef}
  className="absolute top-0 left-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source
    src="https://res.cloudinary.com/dehj18zcx/video/upload/v1779959160/video_e12f67.mp4"
    type="video/mp4"
  />
</video>

      
      
</div>
          {/* 3D SPACE */}
          <SpaceScene />

          {/* OVERLAY */}
          <div
            className="
            absolute
            inset-0
            bg-black/20
            z-10
          "
          />

          {/* CONTENT */}
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

export default Welcome;
