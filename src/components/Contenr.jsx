import React, { useEffect, useState } from "react";
import WelcomeAnimation from "./WelcomeAnimation";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Meetleft from "./Meetleft";
import { motion } from "framer-motion";

import PageWrapper from "../components/PageWrapper";
import ExploreCarousel from "../components/ExploreCarousel";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Recom from "./Recom";
const Content =  () => {
  const navigate=useNavigate()
  const[currdata,setcueedata]=useState({})
  const[isjoin,setisjoin]=useState(false)
  const[iszero,setzero]=useState(false)
  const {user}=useAuth0()
  
 const getmeet =async ()=>{
    const data=await axios.post('https://astra-backend-live-ver1.onrender.com/get_latest_service',user)
    console.log(data.data.sessi);
    setcueedata(data.data.sessi)
  }
  
  useEffect(() => {
  if (user) {
    getmeet();
  }
}, [user]);
  
  const meetingStart = currdata?.slot
  ? (() => {
      const date = new Date(currdata.slot.date);

      const [hours, minutes] =
        currdata.slot.start.split(":");

      date.setHours(
        Number(hours),
        Number(minutes),
        0,
        0
      );

      return date;
    })()
  : null;
 function meetjoin() {
  console.log("clicked");

  if (!isjoin) {
    toast.error(
      "Meeting can only be joined 15 minutes before start time"
    );
    return;
  }

  console.log("Entered");

  navigate(`/meeting/${currdata.id}`);
}
  return (
    <div className="flex flex-col gap-8 h-full">

      {/* Greeting */}
      <div>
        <WelcomeAnimation />

        
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6 flex-1">

        {/* Upcoming Meeting */}
        <div
          className="
          col-span-8
          rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-8
          "
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-6">
            Upcoming Session
          </h2>

          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-light mb-3">
                
              </h1>

              <p>
 {currdata?.slot?.date ? (
  new Date(currdata.slot.date).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
) : (
  <></>
)}
</p>
              <h1 className="text-zinc-500 mt-6 max-w-lg">
  {currdata?.service?.title || ""}
</h1> 

<p className="text-zinc-500 mt-6 max-w-lg">
{currdata?.service?.description ||""}
</p>
            </div>

     <div className="flex gap-4 flex-col justify-center items-center">
      <h2>
       <Meetleft
  startTime={meetingStart}
  setisjoin={setisjoin}
  setzero={setzero}
/></h2>
           {isjoin?
            <button
            
            onClick={meetjoin}
              className="
              px-6
              py-3
              border
              border-[#D4AF37]/30
              rounded-full
              hover:bg-[#D4AF37]/10
              transition

              "
            >
              Join Session
            </button>:<></>}
            </div>
          </div>
        </div>

        {/* Past Sessions */}
        <div
          className="
          col-span-4
          rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-6
          "
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-5">
            Past Sessions
          </h2>

          <div className="space-y-4">
            <div>
              <p>Career Guidance</p>
              <span className="text-zinc-500 text-sm">
                24 Jun 2026
              </span>
            </div>

            <div>
              <p>Compatibility Reading</p>
              <span className="text-zinc-500 text-sm">
                12 Jun 2026
              </span>
            </div>
          </div>
        </div>

        {/* Recommended Services */}
        <div
          className="
          col-span-8
          rounded-3xl
          border border-white/10
          bg-white/[0.02]
          h-fit

          p-6
          "
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-6">
            Recommended Services
          </h2>
          <br /><br />
< PageWrapper>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
        
       
        text-white
        overflow-hidden
      "
    >

     

     <Recom />

      

    </motion.div>
    </PageWrapper>
         
        </div>

        {/* AI Assistant */}
        <div
          className="
          col-span-4
          rounded-3xl
          border border-white/10
          bg-white/[0.02]
          p-6
          flex
          flex-col
          justify-between
          h-fit
          "
        >
          <div>
            <h2 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
              Todays Insight
            </h2>

            <p className="text-zinc-400">
              Ask about your chart, planetary positions,
              compatibility, or upcoming sessions.
            </p>
          </div>

          <button
            className="
            mt-6
            border
            border-[#D4AF37]/30
            rounded-full
            py-3
            hover:bg-[#D4AF37]/10
            transition
            "
          >
            Descriptive View
          </button>
        </div>

      </div>
    </div>
  );
};

export default Content;