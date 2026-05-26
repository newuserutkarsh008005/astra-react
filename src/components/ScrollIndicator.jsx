import { motion } from "framer-motion";

function ScrollIndicator() {

  return (

    <motion.div

      animate={{
        y: [0, 12, 0],
      }}

      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}

      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        z-20
      "
    >

      <div
        className="
          w-[1px]
          h-[70px]
          bg-gradient-to-b
          from-[#d4b99b]
          to-transparent
        "
      />

    </motion.div>
  );
}

export default ScrollIndicator;