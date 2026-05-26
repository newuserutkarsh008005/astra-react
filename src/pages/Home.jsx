import PageWrapper from "../components/PageWrapper";


import HomeHero from "../components/HomeHero";
import FloatingStats from "../components/FloatingStats";
import ScrollIndicator from "../components/ScrollIndicator";
import SpaceScene from "../components/SpaceScene";
import Chatbot from "../components/Chatbot";

function Home() {

  return (

    <PageWrapper>

      <div
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#010103]
          text-white
        "
      >

        {/* 3D SPACE */}
       <SpaceScene />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-black/20
            z-10
          "
        />

        {/* CONTENT */}
        <div className="relative z-20">

          <HomeHero />
<Chatbot />
          <FloatingStats />
          <ScrollIndicator />

        </div>

      </div>

    </PageWrapper>
  );
}

export default Home;