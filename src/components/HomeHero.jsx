import { motion } from "framer-motion";

function HomeHero() {

  return (

    <section
      className="
        min-h-screen
        flex
        items-center
        px-[10%]
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
            text-[0.7rem]
            tracking-[0.6em]
            uppercase
            text-[#d4b99b]
            mb-6
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
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.2,
          }}

          className="
            text-[5rem]
            md:text-[7rem]
            leading-none
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
            mt-8
            max-w-[600px]
            text-white/70
            leading-[2]
            text-[1rem]
          "
        >
          Deep-space astrological intelligence
          merging ancient cosmic systems with
          immersive digital observatory experiences.
         
        </motion.p>

      </div>

    </section>
  );
}

export default HomeHero;