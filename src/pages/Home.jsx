import PageWrapper from "../components/PageWrapper";
import HomeHero from "../components/HomeHero";
import FloatingStats from "../components/FloatingStats";
import ScrollIndicator from "../components/ScrollIndicator";
import Chatbot from "../components/Chatbot";
import ExploreCarousel from "../components/ExploreCarousel";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import QuoteSection from "../components/QuoteSection";
import ContactHero from "../components/ContactHero";
import ContactFormPanel from "../components/ContactFormPanel";
import VideoBackground from "../components/VideoBackground";
import Footer from "../components/Footer";
import { useLanguage } from "../components/LanguageContext";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [contactOpen, setContactOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const startDelay = window.setTimeout(() => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.playbackRate = 0.6;
        desktopVideoRef.current.play().catch(() => {});
      }

      if (mobileVideoRef.current) {
        mobileVideoRef.current.playbackRate = 0.6;
        mobileVideoRef.current.play().catch(() => {});
      }
    }, 500);

    return () => window.clearTimeout(startDelay);
  }, []);

  return (
    <PageWrapper>
      <main className="scroll-smooth bg-[#010103] text-white">
        <section
          id="home"
          aria-label="Astra home"
          className="relative isolate min-h-[100svh] overflow-hidden bg-[#010103]"
        >
          <div className="absolute inset-0 -z-10 hidden overflow-hidden md:block">
            <video
              ref={desktopVideoRef}
              className="absolute inset-0 h-full w-full object-cover"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source
                src="https://res.cloudinary.com/dehj18zcx/video/upload/v1791109252/gemini_generated_video_8bab53dc_qwwajc.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="absolute inset-0 -z-10 overflow-hidden md:hidden">
            <video
              ref={mobileVideoRef}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source
                src="https://res.cloudinary.com/dehj18zcx/video/upload/v1791109618/gemini_generated_video_9c98c8f0_ci6gda.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <HomeHero />
            <Chatbot />
            <FloatingStats />
            <ScrollIndicator />
          </div>
        </section>

        <motion.section
          id="explore"
          aria-label="Explore Astra services"
          className="scroll-mt-20 border-t border-white/10 bg-[#06070d] px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#d4b99b]">
              Astra / Curated Services
            </p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light sm:text-5xl md:text-6xl">
              {t("Explore")}
            </h2>
          </div>
          <ExploreCarousel />
        </motion.section>

        <motion.section
          id="about"
          aria-label="About Astra"
          className="scroll-mt-20 relative isolate overflow-hidden border-t border-white/10 bg-[#02070d] text-white"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_15%,rgba(67,105,111,0.18),transparent_55%),linear-gradient(180deg,#02070d_0%,#071016_55%,#02070d_100%)]" />
          <section className="flex min-h-[75svh] items-center">
            <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 md:px-12">
              <AboutHero />
            </div>
          </section>

          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12">
            <AboutSection
              title={t("Precision Over Prediction")}
              text={t("Astra was built on one principle: clarity beats noise. We focus on what is measurable, meaningful, and actionable.")}
            />
            <AboutSection
              title={t("Modern Computation")}
              text={t("We combine advanced computation with human judgment to turn complexity into elegant, useful decisions.")}
            />
            <AboutSection
              title={t("Ethical Intelligence")}
              text={t("Our approach is thoughtful by design. We protect trust, respect privacy, and create value without compromise.")}
            />
          </div>

          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 md:px-12 md:py-28">
            <QuoteSection />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          aria-label="Contact Astra"
          className="scroll-mt-20 relative isolate overflow-hidden border-t border-white/10 bg-[#030608] text-white"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <VideoBackground />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[#02070d]/70" />
          <div className="relative z-10">
            <ContactHero setOpen={setContactOpen} />
            <ContactFormPanel open={contactOpen} setOpen={setContactOpen} />
          </div>
        </motion.section>

        <Footer />
      </main>
    </PageWrapper>
  );
}

export default Home;