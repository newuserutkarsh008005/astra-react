import React, { useRef } from "react";
import Meet from "../components/Meet";

const UserHome = () => {
  const videoRef = useRef(null);

  return (
    <div className="relative w-full h-fullw ">
      
      <video
  className="fixed inset-0 w-full h-full object-cover brightness-50 "
  autoPlay
  loop
  muted
  playsInline
>
  <source
    src="https://res.cloudinary.com/dehj18zcx/video/upload/v1780900245/create_a_k_video_of_the_space_z9yxqb.mp4"
    type="video/mp4"
  />
</video>
<div className="fixed inset-0 bg-black/50 z-0" />
<Meet />
      
    </div>
  );
};

export default UserHome;