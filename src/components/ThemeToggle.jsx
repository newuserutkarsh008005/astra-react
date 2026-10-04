import { Moon, Sun } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, language } = useLanguage();
  const isDark = theme === "dark";
  const label = language === "hi"
    ? isDark ? "हल्की थीम" : "डार्क थीम"
    : isDark ? "Light theme" : "Dark theme";
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${label}`}
      aria-pressed={!isDark}
      title={`Switch to ${label}`}
      className="global-toggle fixed bottom-5 right-32 z-1000000 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-[#09121a]/95 px-4 text-sm font-medium text-white shadow-lg backdrop-blur transition hover:border-amber-200/70 hover:bg-[#10212c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
    >
      <Icon size={17} aria-hidden="true" />
      <span>{isDark ? (language === "hi" ? "हल्का" : "Light") : (language === "hi" ? "डार्क" : "Dark")}</span>
    </button>
  );
}
