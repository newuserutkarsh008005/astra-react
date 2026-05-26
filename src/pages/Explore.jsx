import { motion } from "framer-motion";

import PageWrapper from "../components/PageWrapper";
import ExploreCarousel from "../components/ExploreCarousel";

function Explore() {

  return (
   < PageWrapper>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="
        min-h-screen
        bg-[#06070d]
        text-white
        overflow-hidden
      "
    >

     

      <ExploreCarousel />

      

    </motion.div>
    </PageWrapper>
  );
}

export default Explore;