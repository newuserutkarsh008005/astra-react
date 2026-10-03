import { useEffect, useRef } from "react";

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startDelay = window.setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.8;
        videoRef.current.play().catch(() => {});
      }
    }, 500);

    return () => window.clearTimeout(startDelay);
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="auto"
      className="
      videoplay
        absolute
        inset-0
        w-full
        h-full
        object-cover
        z-0
      "
    >
      <source
        src="https://res.cloudinary.com/dehj18zcx/video/upload/v1790948763/gemini_generated_video_6b1c20e0_hiondi.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default VideoBackground;