
import VideoBackground2 from "../components/VideoBackground";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import QuoteSection from "../components/QuoteSection";
import PageWrapper from "../components/PageWrapper";

function About() {
  return (
    
    <div className="relative min-h-screen overflow-hidden text-white">

      <VideoBackground2 />

      <div className="fixed inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20">

       

        <AboutHero />

        <AboutSection
          title="Precision Over Prediction"
          text="Astra was founded on a single principle..."
        />

        <AboutSection
          title="Modern Computation"
          text="By merging ancient astronomical observation..."
        />

        <AboutSection
          title="Ethical Intelligence"
          text="Our methodology respects privacy..."
        />

        <QuoteSection />

       

      </div>
    </div>
    
  );
}

export default About;