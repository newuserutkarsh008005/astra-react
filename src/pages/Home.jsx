import PageWrapper from "../components/PageWrapper";

import HomeHero from "../components/HomeHero";
import FloatingStats from "../components/FloatingStats";
import ScrollIndicator from "../components/ScrollIndicator";
import SpaceScene from "../components/SpaceScene";
import Chatbot from "../components/Chatbot";
import { useRef, useEffect, useState } from "react";
import { log } from "three/tsl";
function Home() {
  const videoRef = useRef(null);
const url="https://version1-1-c962.onrender.com/chat"
useEffect(function(){
  async function apis(){
    const response=await fetch(url);
    console.log(response)
  }
  apis();
},[])
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
        
  <video
  ref={videoRef}
  className="fixed top-0 left-0 w-screen h-screen object-cover "
  autoPlay
  loop
  muted
  playsInline
>
  <source
 src="https://res.cloudinary.com/dehj18zcx/video/upload/v1780830253/newvideo_olhwr2.mp4"
type="video/mp4"
  />
</video>

          {/* OVERLAY */}
          {/* <div
            className="
            absolute
            inset-0
            bg-black/20
            z-10
          "
          /> */}

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

export default Home;
