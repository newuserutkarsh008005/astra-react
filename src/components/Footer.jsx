import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="overf relative mt-[120] w-full border-t border-white/10 bg-[#010103] px-[6%] py-[35] text-white">
      {/* Footer Grid */}
      <div className="mainfooter  grid grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <h1
            className="text-[1.2rem] tracking-[0.5em] text-[#d4b99b]"
            style={{ fontFamily: "'Cormorant Garamond'" }}
          >
            ASTRA
          </h1>

          <p className=" f1 text-[0.68rem] leading-6 text-white/55 max-w-[260]">
            {t("Precision celestial intelligence platform delivering advanced astrological analytics, deep-space visualization and cosmic insights.")}
          </p>
        </div>

        {/* Platform */}
        <div className=" mf2 flex flex-col gap-2">
          <h2 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#d4b99b]/70">
            {t("Platform")}
          </h2>

          <Link
            to="/dashboard"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Dashboard")}
          </Link>

          <Link
            to="/store"
            className=" mf3 text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Store")}
          </Link>

          <Link
            to="/explore"
            className=" mf3 text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Explore")}
          </Link>

          <Link
            to="/readings"
            className=" mf4 text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Live Readings")}
          </Link>
        </div>

        {/* Company */}
        <div className=" mf9 flex flex-col gap-2">
          <h2 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#d4b99b]/70">
            {t("Company")}
          </h2>

          <Link
            to="/about"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("About Us")}
          </Link>

          <Link
            to="/careers"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Careers")}
          </Link>

          <Link
            to="/press"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Press")}
          </Link>

          <Link
            to="/contact"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Contact")}
          </Link>
        </div>

        {/* Legal */}
        <div className=" fotterl flex flex-col gap-2">
          <h2 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#d4b99b]/70">
            {t("Legal")}
          </h2>

          <Link
            to="/privacy"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Privacy Policy")}
          </Link>

          <Link
            to="/terms"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Terms of Service")}
          </Link>

          <Link
            to="/security"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Security")}
          </Link>

          <Link
            to="/support"
            className="text-[0.68rem] text-white/55 hover:text-[#d4b99b] transition"
          >
            {t("Support")}
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 border-t border-[#d4b99b]/10 flex items-center justify-between text-[0.6rem] tracking-[0.12em] uppercase text-white/45">
        <div>{t("© 2026 ASTRA OBSERVATORY. All rights reserved.")}</div>

        <div>
          Rendering Engine: <span className="text-[#d4b99b]/80">ACTIVE</span>
          {" • "}
          Deep Field Mode: <span className="text-[#d4b99b]/80">ENABLED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
