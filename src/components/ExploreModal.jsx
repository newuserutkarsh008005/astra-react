import { motion } from "framer-motion";

function ExploreModal({

  selectedService,
  setSelectedService,

}) {

  if (!selectedService) return null;

  return (

    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      onClick={() =>
        setSelectedService(null)
      }

      className="
        fixed
        inset-0
        z-[9999]
        bg-black/70
        backdrop-blur-md
        flex
        items-center
        justify-center
        px-6
      "
    >

      {/* CARD */}
      <motion.div

        onClick={(e) =>
          e.stopPropagation()
        }

        initial={{
          scale: 0.8,
          opacity: 0,
          y: 40,
        }}

        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.4,
        }}

        className="
          relative
          w-full
          max-w-[850px]
          rounded-[30px]
          overflow-hidden
          bg-[#0a0b11]
          border
          border-[#d4b99b]/20
          shadow-2xl
        "
      >

        {/* IMAGE */}
        <div className="h-[320px] overflow-hidden">

          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>

        {/* CONTENT */}
        <div className="p-10">

          {/* TOP */}
          <div
            className="
              flex
              items-center
              justify-between
              mb-6
            "
          >

            <span
              className="
                px-4
                py-2
                rounded-full
                border
                border-white/10
                text-[0.7rem]
                uppercase
                tracking-[0.1em]
                text-white/70
              "
            >
              {selectedService.category}
            </span>

            <span
              className="
                text-[#d4b99b]
                text-xl
                font-semibold
              "
            >
              {selectedService.price}
            </span>

          </div>

          {/* TITLE */}
          <h2
            className="
              text-4xl
              mb-6
              leading-tight
            "
          >
            {selectedService.title}
          </h2>

          {/* FULL DESC */}
          <p
            className="
              text-white/70
              leading-[2]
              text-[1rem]
              mb-8
            "
          >
            {selectedService.more}
          </p>

          {/* CLOSE */}
          <button

            onClick={() =>
              setSelectedService(null)
            }

            className="
              px-8
              py-4
              rounded-full
              border
              border-[#d4b99b]/30
              text-[#d4b99b]
              hover:bg-[#d4b99b]
              hover:text-black
              transition-all
            "
          >
            Close
          </button>

        </div>

      </motion.div>

    </motion.div>
  );
}

export default ExploreModal;