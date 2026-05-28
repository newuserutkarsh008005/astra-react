function VideoBackground2() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="
videoplay2
        fixed
        inset-0
        w-full
        h-full
        object-cover
        z-0
      "
    >
      <source
        src="https://res.cloudinary.com/dehj18zcx/video/upload/q_auto/f_auto/v1775924870/09_vkda2d.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default VideoBackground2;