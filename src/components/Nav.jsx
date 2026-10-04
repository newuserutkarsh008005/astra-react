import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import {
  RiUserLine,
  RiMenuLine,
  RiCloseLine,
} from "@remixicon/react";

import { useAuth0 } from "@auth0/auth0-react";
import { useUser } from "./UserContext";
import { useLanguage } from "./LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({ curr, setata }) {
  const { dbuser } = useUser();
  const { t } = useLanguage();

  const {
    loginWithRedirect,
    logout,
    isLoading,
    isAuthenticated,
    user,
  } = useAuth0();

  const [open, setOpen] = useState(false);

  // =========================================================
  // CLOSE MOBILE MENU WHEN PAGE CHANGES
  // =========================================================
  useEffect(() => {
    setOpen(false);
  }, [curr]);

  // =========================================================
  // DEBUG
  // =========================================================
  useEffect(() => {
    console.log("AUTH:", isAuthenticated);
    console.log("USER:", user);
    console.log("DBUSER:", dbuser);
    console.log("Loading:", isLoading);

    if (isAuthenticated && dbuser) {
      console.log("Dbuser is printing:", dbuser.id);
    }
  }, [isAuthenticated, user, dbuser, isLoading]);

  // =========================================================
  // NAV LINK STYLE
  // =========================================================
  const navStyle = ({ isActive }) =>
    `
      relative
      inline-block
      text-gray-200
      text-base
      lg:text-lg
      whitespace-nowrap

      transition-all
      duration-300
      ease-in-out

      hover:text-cyan-200
      hover:scale-[1.05]

      after:content-['']
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-cyan-400
      after:transition-all
      after:duration-300

      hover:after:w-full

      ${isActive ? "text-cyan-300 after:w-full" : ""}
    `;

  // =========================================================
  // LOGIN / LOGOUT
  // =========================================================
  const handleLogin = () => {
    setOpen(false);
    loginWithRedirect();
  };

  const handleLogout = () => {
    setOpen(false);

    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
          ALWAYS ABOVE VIDEO
      ====================================================== */}

      <nav
        className="
          fixed
          top-0
          left-0
          right-0

          w-full
          h-[72px]

          z-[999999]

          flex
          items-center

          bg-transparent

          pointer-events-auto
        "
      >
        <div
          className="
            w-full
            max-w-6xl
            mx-auto

            px-5
            sm:px-6

            flex
            items-center
            justify-between
          "
        >

          {/* =================================================
              ASTRA LOGO
          ================================================= */}

          <NavLink
            to="/home"
            onClick={() => setOpen(false)}
            className="
              text-3xl
              sm:text-4xl

              tracking-[0.3em]
              sm:tracking-[0.5em]

              text-[#d5bb93]

              font-['Cinzel']

              whitespace-nowrap

              transition-transform
              duration-300

              hover:scale-105
            "
          >
            Astra
          </NavLink>


          {/* =================================================
              DESKTOP NAVIGATION
              md and above
          ================================================= */}

          <div
            className="
              hidden
              md:flex

              items-center
              gap-5
              lg:gap-8
            "
          >

            <NavLink
              to="/dashboard"
              className={navStyle}
              onClick={() => setOpen(false)}
            >
              {t("Dashboard")}
            </NavLink>

            <NavLink
              to="/explore"
              className={navStyle}
              onClick={() => setOpen(false)}
            >
              {t("Explore")}
            </NavLink>

            <NavLink
              to="/store"
              className={navStyle}
              onClick={() => setOpen(false)}
            >
              {t("Store")}
            </NavLink>

            <NavLink
              to="/contact"
              className={navStyle}
              onClick={() => setOpen(false)}
            >
              {t("Contact")}
            </NavLink>

            <NavLink
              to="/about"
              className={navStyle}
              onClick={() => setOpen(false)}
            >
              {t("About")}
            </NavLink>


            {/* =================================================
                LOGIN / LOGOUT
            ================================================= */}

            {isLoading ? (
              <span className="text-sm text-gray-300">
                {t("Loading...")}
              </span>
            ) : !isAuthenticated ? (
              <button
                onClick={handleLogin}
                className="
                  px-4
                  py-2

                  rounded-full

                  border
                  border-cyan-400/40

                  text-cyan-200

                  hover:bg-cyan-400/10
                  hover:border-cyan-300/70

                  transition-all
                  duration-300
                "
              >
                {t("Login")}
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="
                  px-4
                  py-2

                  rounded-full

                  border
                  border-cyan-400/40

                  text-cyan-200

                  hover:bg-cyan-400/10
                  hover:border-cyan-300/70

                  transition-all
                  duration-300
                "
              >
                {t("Logout")}
              </button>
            )}


            {/* PROFILE */}

            <RiUserLine
              size={22}
              className="
                text-white
                shrink-0
              "
            />

            <LanguageToggle />

          </div>


          {/* =================================================
              MOBILE CONTROLS
              below md
          ================================================= */}

          <div
            className="
              flex
              md:hidden

              items-center
              gap-3
            "
          >

            {/* PROFILE */}

            <RiUserLine
              size={22}
              className="
                text-white
                shrink-0
              "
            />

            <LanguageToggle />

            {/* HAMBURGER */}

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label={
                open
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="
                w-10
                h-10

                flex
                items-center
                justify-center

                rounded-full

                text-white

                border
                border-white/20

                bg-black/20

                hover:bg-white/10

                transition-all
                duration-300
              "
            >
              {open ? (
                <RiCloseLine size={27} />
              ) : (
                <RiMenuLine size={27} />
              )}
            </button>

          </div>

        </div>
      </nav>


      {/* =====================================================
          MOBILE MENU
          PORTAL -> DIRECTLY INTO BODY
          SO VIDEO CANNOT COVER IT
      ====================================================== */}

      {open &&
        typeof document !== "undefined" &&
        createPortal(

          <div
            className="
              fixed

              top-[72px]
              right-4

              z-[1000000]

              w-[230px]

              p-5

              rounded-2xl

              border
              border-white/15

              bg-black/85

              backdrop-blur-xl

              shadow-2xl

              md:hidden
            "
          >

            <div
              className="
                flex
                flex-col
                gap-5
              "
            >

              {/* HOME */}

              <NavLink
                to="/home"
                className={navStyle}
                onClick={() => setOpen(false)}
              >
                {t("Home")}
              </NavLink>


              {/* DASHBOARD */}

              <NavLink
                to="/dashboard"
                className={navStyle}
                onClick={() => setOpen(false)}
              >
                {t("Dashboard")}
              </NavLink>


              {/* EXPLORE */}

              <NavLink
                to="/explore"
                className={navStyle}
                onClick={() => setOpen(false)}
              >
                {t("Explore")}
              </NavLink>


              {/* STORE */}

              <NavLink
                to="/store"
                className={navStyle}
                onClick={() => setOpen(false)}
              >
                {t("Store")}
              </NavLink>


              {/* CONTACT */}

              <NavLink
                to="/contact"
                className={navStyle}
                onClick={() => setOpen(false)}
              >
                {t("Contact")}
              </NavLink>


              {/* ABOUT */}

              <NavLink
                to="/about"
                className={navStyle}
                onClick={() => setOpen(false)}
              >
                {t("About")}
              </NavLink>


              {/* =================================================
                  LOGIN / LOGOUT
              ================================================= */}

              <div
                className="
                  pt-4
                  border-t
                  border-white/10
                "
              >

                {isLoading ? (

                  <span className="text-sm text-gray-300">
                    {t("Loading...")}
                  </span>

                ) : !isAuthenticated ? (

                  <button
                    onClick={handleLogin}
                    className="
                      w-full

                      px-4
                      py-2

                      rounded-full

                      border
                      border-cyan-400/40

                      text-cyan-200

                      hover:bg-cyan-400/10

                      transition-all
                      duration-300
                    "
                  >
                    {t("Login")}
                  </button>

                ) : (

                  <button
                    onClick={handleLogout}
                    className="
                      w-full

                      px-4
                      py-2

                      rounded-full

                      border
                      border-cyan-400/40

                      text-cyan-200

                      hover:bg-cyan-400/10

                      transition-all
                      duration-300
                    "
                  >
                    {t("Logout")}
                  </button>

                )}

              </div>

            </div>

          </div>,

          document.body
        )}
    </>
  );
}