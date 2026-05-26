import { motion } from "framer-motion";

function ExploreCard({

  service,
  setSelectedService,

}) {

  return (

    <motion.div

      whileHover={{
        scale: 1.03,
        y: -10,
      }}

      transition={{
        duration: 0.5,
      }}

      className="
        min-w-[320px]
        max-w-[320px]
        rounded-[24px]
        overflow-hidden
        border
        border-[#d4b99b]/20
        bg-[#0b0d15]
        backdrop-blur-xl
      "
    >

      {/* IMAGE */}
      <div className="h-[220px] overflow-hidden">

        <motion.img

          whileHover={{
            scale: 1.1,
          }}

          transition={{
            duration: 0.8,
          }}

          src={service.image}

          alt={service.title}

          className="
            w-full
            h-full
            object-cover
          "
        />

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* META */}
        <div
          className="
            flex
            items-center
            justify-between
            mb-4
          "
        >

          <span
            className="
              text-[0.65rem]
              uppercase
              tracking-[0.1em]
              border
              border-white/20
              rounded-full
              px-3
              py-1
              text-white/70
            "
          >
            {service.category}
          </span>

          <span className="text-[#e7cfb2] font-semibold">
            {service.price}
          </span>

        </div>

        {/* TITLE */}
        <h2
          className="
            text-[1.15rem]
            font-semibold
            leading-[1.4]
            mb-4
          "
        >
          {service.title}
        </h2>

        {/* DESC */}
        <p
          className="
            text-white/70
            text-[0.92rem]
            leading-[1.6]
            mb-6
          "
        >
          {service.description}
        </p>

        {/* BUTTON */}
        <button
          className="
            w-full
            border
            border-[#d4b99b]/50
            text-[#d4b99b]
            py-3
            rounded-full
            hover:bg-[#d4b99b]/10
            transition
            mb-4
          "
        >
          {service.button}
        </button>

        {/* READ MORE */}
        <button

          onClick={() =>
            setSelectedService(service)
          }

          className="
            text-[#e7cfb2]
            text-[0.78rem]
            uppercase
            tracking-[0.08em]
          "
        >
          Read More
        </button>

      </div>

    </motion.div>
  );
}

export default ExploreCard;