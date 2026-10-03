import React, { useEffect, useState } from "react";
import WelcomeAnimation from "./WelcomeAnimation";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Meetleft from "./Meetleft";
import { motion } from "framer-motion";

import PageWrapper from "../components/PageWrapper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Recom from "./Recom";

const Content = () => {
  const navigate = useNavigate();

  const [currdata, setcueedata] = useState({});
  const [isjoin, setisjoin] = useState(false);
  const [iszero, setzero] = useState(false);

  const { user } = useAuth0();

  // =========================================================
  // GET LATEST MEETING
  // =========================================================

  const getmeet = async () => {
    try {
      const data = await axios.post(
        "https://astra-backend-live-ver1.onrender.com/get_latest_service",
        user
      );

      console.log(data.data.sessi);

      setcueedata(data.data.sessi);
    } catch (error) {
      console.error("Failed to get meeting:", error);
    }
  };

  useEffect(() => {
    if (user) {
      getmeet();
    }
  }, [user]);

  // =========================================================
  // MEETING START TIME
  // =========================================================

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

  // =========================================================
  // JOIN MEETING
  // =========================================================

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
    <div
      className="
        flex
        flex-col

        gap-5
        sm:gap-6
        md:gap-8

        w-full
        min-w-0
      "
    >

      {/* =====================================================
          GREETING
      ====================================================== */}

      <div
        className="
          w-full
          min-w-0
          overflow-hidden
        "
      >
        <WelcomeAnimation />
      </div>


      {/* =====================================================
          MAIN GRID

          MOBILE:
          1 COLUMN

          DESKTOP:
          12 COLUMN GRID
      ====================================================== */}

      <div
        className="
          grid

          grid-cols-1
          lg:grid-cols-12

          gap-4
          sm:gap-5
          md:gap-6

          w-full
          min-w-0
        "
      >

        {/* ===================================================
            UPCOMING SESSION
        ==================================================== */}

        <div
          className="
            col-span-1
            lg:col-span-8

            w-full
            min-w-0

            rounded-2xl
            sm:rounded-3xl

            border
            border-white/10

            bg-white/[0.02]

            p-5
            sm:p-6
            md:p-8

            overflow-hidden
          "
        >

          <h2
            className="
              text-xs
              sm:text-sm

              tracking-[0.2em]

              uppercase

              text-[#D4AF37]

              mb-5
              sm:mb-6
            "
          >
            Upcoming Session
          </h2>


          {/* =================================================
              MEETING CONTENT
          ================================================== */}

          <div
            className="
              flex
              flex-col

              xl:flex-row

              justify-between

              gap-6
              md:gap-8

              min-w-0
            "
          >

            {/* ------------------------------------------------
                SESSION INFORMATION
            ------------------------------------------------- */}

            <div
              className="
                flex-1
                min-w-0
              "
            >

              {/* DATE */}

              {currdata?.slot?.date && (
                <p
                  className="
                    text-base
                    sm:text-lg

                    text-zinc-200

                    break-words
                  "
                >
                  {new Date(
                    currdata.slot.date
                  ).toLocaleDateString(
                    "en-IN",
                    {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
              )}


              {/* SERVICE TITLE */}

              <h1
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl

                  font-light

                  text-zinc-300

                  mt-5
                  sm:mt-6

                  break-words
                "
              >
                {currdata?.service?.title || ""}
              </h1>


              {/* DESCRIPTION */}

              <p
                className="
                  text-sm
                  sm:text-base

                  text-zinc-500

                  mt-4
                  sm:mt-5

                  max-w-2xl

                  leading-relaxed

                  break-words
                "
              >
                {currdata?.service?.description || ""}
              </p>

            </div>


            {/* ------------------------------------------------
                MEETING TIMER / JOIN
            ------------------------------------------------- */}

            <div
              className="
                w-full
                xl:w-auto

                shrink-0

                flex
                flex-col

                justify-center
                items-start
                xl:items-center

                gap-4

                pt-2
                xl:pt-0
              "
            >

              {/* TIMER */}

              <div
                className="
                  max-w-full
                  overflow-hidden
                "
              >
                <Meetleft
                  startTime={meetingStart}
                  setisjoin={setisjoin}
                  setzero={setzero}
                />
              </div>


              {/* JOIN BUTTON */}

              {isjoin && (
                <button
                  onClick={meetjoin}
                  className="
                    w-full
                    sm:w-auto

                    px-6
                    py-3

                    border
                    border-[#D4AF37]/30

                    rounded-full

                    text-sm
                    sm:text-base

                    text-white

                    hover:bg-[#D4AF37]/10

                    transition

                    whitespace-nowrap
                  "
                >
                  Join Session
                </button>
              )}

            </div>

          </div>

        </div>


        {/* ===================================================
            PAST SESSIONS
        ==================================================== */}

        <div
          className="
            col-span-1
            lg:col-span-4

            w-full
            min-w-0

            rounded-2xl
            sm:rounded-3xl

            border
            border-white/10

            bg-white/[0.02]

            p-5
            sm:p-6

            overflow-hidden
          "
        >

          <h2
            className="
              text-xs
              sm:text-sm

              tracking-[0.2em]

              uppercase

              text-[#D4AF37]

              mb-5
            "
          >
            Past Sessions
          </h2>


          <div
            className="
              space-y-5
              sm:space-y-6
            "
          >

            {/* SESSION 1 */}

            <div>
              <p
                className="
                  text-sm
                  sm:text-base

                  text-zinc-200

                  break-words
                "
              >
                Career Guidance
              </p>

              <span
                className="
                  text-zinc-500
                  text-xs
                  sm:text-sm
                "
              >
                24 Jun 2026
              </span>
            </div>


            {/* SESSION 2 */}

            <div>
              <p
                className="
                  text-sm
                  sm:text-base

                  text-zinc-200

                  break-words
                "
              >
                Compatibility Reading
              </p>

              <span
                className="
                  text-zinc-500
                  text-xs
                  sm:text-sm
                "
              >
                12 Jun 2026
              </span>
            </div>

          </div>

        </div>


        {/* ===================================================
            RECOMMENDED SERVICES
        ==================================================== */}

        <div
          className="
            col-span-1
            lg:col-span-8

            w-full
            min-w-0

            rounded-2xl
            sm:rounded-3xl

            border
            border-white/10

            bg-white/[0.02]

            p-5
            sm:p-6

            overflow-hidden
          "
        >

          <h2
            className="
              text-xs
              sm:text-sm

              tracking-[0.2em]

              uppercase

              text-[#D4AF37]

              mb-6
            "
          >
            Recommended Services
          </h2>


          <PageWrapper>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="
                w-full
                min-w-0
                text-white
              "
            >

              <Recom />

            </motion.div>

          </PageWrapper>

        </div>


        {/* ===================================================
            AI ASSISTANT
        ==================================================== */}

        <div
          className="
            col-span-1
            lg:col-span-4

            w-full
            min-w-0

            rounded-2xl
            sm:rounded-3xl

            border
            border-white/10

            bg-white/[0.02]

            p-5
            sm:p-6

            flex
            flex-col

            justify-between

            overflow-hidden
          "
        >

          <div>

            <h2
              className="
                text-xs
                sm:text-sm

                tracking-[0.2em]

                uppercase

                text-[#D4AF37]

                mb-4
              "
            >
              Today's Insight
            </h2>


            <p
              className="
                text-sm
                sm:text-base

                text-zinc-400

                leading-relaxed
              "
            >
              Ask about your chart, planetary
              positions, compatibility, or upcoming
              sessions.
            </p>

          </div>


          <button
            className="
              mt-6

              w-full

              border
              border-[#D4AF37]/30

              rounded-full

              py-3

              text-sm
              sm:text-base

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