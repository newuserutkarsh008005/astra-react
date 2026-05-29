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
        <div className="h-[220px] md:h-[320px] overflow-hidden">

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
        <div className="p-6 md:p-10">

          {/* TOP */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-3 md:gap-0">

            <span className="px-3 py-1 rounded-full border border-white/10 text-[0.65rem] uppercase tracking-[0.08em] text-white/70">
              {selectedService.category}
            </span>

            <span className="text-[#d4b99b] text-lg md:text-xl font-semibold">
              {selectedService.price}
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 leading-tight">
            {selectedService.title}
          </h2>

          {/* FULL DESC */}
          <p className="text-white/70 leading-[1.8] text-[0.95rem] md:text-[1rem] mb-6 md:mb-8">
            {selectedService.more}
          </p>

          {/* CLOSE */}
          <button onClick={() => setSelectedService(null)} className="px-6 py-3 rounded-full border border-[#d4b99b]/30 text-[#d4b99b] hover:bg-[#d4b99b] hover:text-black transition-all">
            Close
          </button>

        </div>

      </motion.div>

    </motion.div>
  );
}

export default ExploreModal;