import { motion } from "framer-motion";
import HomeAnimation from "./HomeAnimation";

function HomeHero() {

  return (

    <section
      className="
        min-h-screen
        flex
        items-center
        px-6
        pt-24
        sm:px-[8%]
        md:px-[10%]
        md:pt-0
      "
    >

      <div>

        {/* MINI TEXT */}
        <motion.p

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
            text-[0.58rem]
            sm:text-[0.7rem]
            tracking-[0.35em]
            sm:tracking-[0.6em]
            uppercase
            text-[#d4b99b]
            mb-5
            sm:mb-6
          "
        >
          Sector_04 // Deep_Field
        </motion.p>

        {/* MAIN TITLE */}
        <motion.h1

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 2,
            y: 0,
          }}

          transition={{
            duration: 1.2,
          }}

          className="
            text-[3.2rem]
            sm:text-[4.25rem]
            md:text-[7rem]
            leading-[0.9]
            font-light
          "

          style={{
            fontFamily:
              "'Cormorant Garamond'"
          }}
        >
          Astral
          <br />

          <i>Precision.</i>

        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 0.5,
            duration: 1,
          }}

          className="
            mt-6
            sm:mt-8
            max-w-[800px]
            text-white/90
            leading-[1.7]
            text-[1.2rem]
            sm:text-[1rem]
          "
        >
          <HomeAnimation />
         
        </motion.p>

      </div>

    </section>
  );
}

export default HomeHero;