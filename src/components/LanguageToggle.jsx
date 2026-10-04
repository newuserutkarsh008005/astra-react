import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function LanguageToggle({ floating = false }) {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "Hindi" : "English";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch language to ${nextLanguage}`}
      aria-pressed={language === "hi"}
      title={`Switch language to ${nextLanguage}`}
      className={`global-toggle inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-[#09121a]/95 text-sm font-medium text-white shadow-lg backdrop-blur transition hover:border-cyan-300/70 hover:bg-[#10212c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${floating ? "fixed bottom-5 right-5 z-[1000000] min-h-11 px-4" : "h-10 w-10 md:w-auto md:px-3"}`}
    >
      <Languages size={20} aria-hidden="true" />
      <span className={floating ? "" : "hidden lg:inline"}>
        {language === "en" ? "हिंदी" : "English"}
      </span>
    </button>
  );
}