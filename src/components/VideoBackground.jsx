function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="
        fixed
        inset-0
        w-full
        h-full
        object-cover
        z-0
      "
    >
      <source
        src="https://res.cloudinary.com/dehj18zcx/video/upload/q_auto/f_auto/v1775924891/Galaxy_ku3490.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default VideoBackground;