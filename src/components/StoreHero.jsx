import Countdown from "./Countdown";
import SubscribeBox from "./SubscribeBox";
import { useLanguage } from "./LanguageContext";

function StoreHero() {
  const { t } = useLanguage();
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-5
        md:overflow-hidden
        
      "
    >

      <h2
        className="
          text-5xl
          tracking-[6px]
          mb-4
          text-cyan-400
        "
        style={{ fontFamily: "'Cormorant Garamond'" }}
      >
        {t("ASTRA SHOP")}
      </h2>

      <h1 className="text-4xl mb-4">
        {t("Coming Soon")}
      </h1>

      <p className="max-w-[460px] text-white/70 mb-8">
        {t("Our cosmic collection is preparing for launch. Stay tuned and be the first to explore Astra's galactic treasures.")}
      </p>

      <Countdown />

      <SubscribeBox />

    </div>
  );
}

export default StoreHero;