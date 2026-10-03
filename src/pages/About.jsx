import Video2 from "../components/VideoBackground";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import QuoteSection from "../components/QuoteSection";

function About() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#02070d] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Video2 />

        {/* Main darkening layer */}
        <div className="absolute inset-0 bg-[#02070d]/55" />

        {/* Extra gradient for readable text */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#02070d]/80
            via-[#02070d]/35
            to-[#02070d]/90
          "
        />
      </div>


      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}

      <div className="relative z-10">

        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="min-h-screen flex items-center">

          <div
            className="
              w-full
              max-w-6xl
              mx-auto
              px-6
              sm:px-8
              lg:px-12

              pt-28
              pb-20

              md:pt-32
            "
          >
            <AboutHero />
          </div>

        </section>


        {/* ===================================================
            CONTENT SECTIONS
        ==================================================== */}

        <div
          className="
            w-full
            max-w-6xl
            mx-auto
            px-6
            sm:px-8
            lg:px-12
          "
        >

          <AboutSection
            title="Precision Over Prediction"
            text="Astra was built on one principle: clarity beats noise. We focus on what is measurable, meaningful, and actionable."
          />

          <AboutSection
            title="Modern Computation"
            text="We combine advanced computation with human judgment to turn complexity into elegant, useful decisions."
          />

          <AboutSection
            title="Ethical Intelligence"
            text="Our approach is thoughtful by design. We protect trust, respect privacy, and create value without compromise."
          />

        </div>


        {/* ===================================================
            QUOTE
        ==================================================== */}

        <section className="relative">

          <div
            className="
              w-full
              max-w-6xl
              mx-auto
              px-6
              sm:px-8
              lg:px-12
              py-24
              md:py-32
            "
          >
            <QuoteSection />
          </div>

        </section>


        {/* Bottom breathing room */}

        <div className="h-20 md:h-32" />

      </div>

    </main>
  );
}

export default About;