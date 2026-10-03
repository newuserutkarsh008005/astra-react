import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  CreditCard,
  Settings,
  Crown,
  User,
  Menu,
  X,
} from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={18} />,
    path: "/dashboard",
  },
  {
    name: "Appointments",
    icon: <Calendar size={18} />,
    path: "/appointment",
  },
  {
    name: "Bookings",
    icon: <BookOpen size={18} />,
    path: "/bookings",
  },
  {
    name: "Payments",
    icon: <CreditCard size={18} />,
    path: "/payments",
  },
  {
    name: "Settings",
    icon: <Settings size={18} />,
    path: "/settings",
  },
];

const Sidedashboard = () => {
  const { user, logout } = useAuth0();

  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <>
      {/* =====================================================
          MOBILE HEADER
      ====================================================== */}

      <div
        className="
          md:hidden

          w-full

          bg-[#020617]

          border
          border-white/5

          rounded-2xl

          px-4
          py-4

          flex
          items-center
          justify-between

          relative
          z-50
        "
      >
        {/* ASTRA */}

        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="
            text-2xl
            sm:text-3xl

            font-serif
            font-light

            tracking-[0.3em]

            text-[#D4AF37]
          "
        >
          Astra
        </Link>

        {/* HAMBURGER */}

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={
            mobileOpen
              ? "Close dashboard menu"
              : "Open dashboard menu"
          }
          className="
            w-11
            h-11

            rounded-xl

            border
            border-white/10

            bg-white/[0.03]

            text-zinc-300

            flex
            items-center
            justify-center

            hover:text-white
            hover:border-[#D4AF37]/30
            hover:bg-white/[0.05]

            transition-all
          "
        >
          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileOpen && (
        <div
          className="
            md:hidden

            w-full

            bg-[#020617]

            border
            border-white/5

            rounded-2xl

            p-4

            -mt-2

            relative
            z-40

            shadow-2xl
          "
        >

          {/* NAVIGATION */}

          <nav className="flex flex-col gap-1.5">

            {menuItems.map((item) => {
              const active =
                location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    flex
                    items-center
                    gap-3

                    px-4
                    py-3

                    rounded-xl

                    border

                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-[#D4AF37]/10
                          border-[#D4AF37]/20
                          text-[#D4AF37]
                        `
                        : `
                          border-transparent
                          text-zinc-400
                          hover:bg-white/[0.03]
                          hover:text-white
                        `
                    }
                  `}
                >
                  {item.icon}

                  <span className="text-sm tracking-wide">
                    {item.name}
                  </span>
                </Link>
              );
            })}

          </nav>


          {/* DIVIDER */}

          <div className="h-px bg-white/5 my-4" />


          {/* PREMIUM */}

          <div
            className="
              bg-white/[0.02]

              border
              border-[#D4AF37]/10

              rounded-2xl

              p-4
            "
          >
            <div className="flex items-center gap-2 mb-3">

              <Crown
                size={17}
                className="text-[#D4AF37]"
              />

              <h3
                className="
                  text-[#D4AF37]
                  font-medium
                "
              >
                Astra Premium
              </h3>

            </div>

            <p
              className="
                text-sm
                text-zinc-500
                leading-relaxed
                mb-4
              "
            >
              Unlock advanced insights, exclusive
              reports and priority consultations.
            </p>

            <button
              className="
                w-full

                py-2.5

                rounded-full

                border
                border-[#D4AF37]/20

                text-[#D4AF37]

                hover:bg-[#D4AF37]/10

                transition
              "
            >
              Upgrade
            </button>

          </div>


          {/* USER */}

          <div
            className="
              mt-4

              bg-white/[0.02]

              border
              border-white/5

              rounded-2xl

              p-3

              flex
              items-center
              justify-between

              gap-3
            "
          >

            <div className="flex items-center gap-3 min-w-0">

              {/* PROFILE */}

              <div
                className="
                  w-10
                  h-10

                  shrink-0

                  rounded-full

                  overflow-hidden

                  bg-[#D4AF37]/10

                  flex
                  items-center
                  justify-center
                "
              >
                {user?.picture ? (
                  <img
                    src={user.picture}
                    alt="User"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                ) : (
                  <User
                    size={18}
                    className="text-[#D4AF37]"
                  />
                )}
              </div>

              <div className="min-w-0">

                <h3
                  className="
                    text-sm
                    text-white
                    truncate
                  "
                >
                  {user?.nickname ||
                    user?.name ||
                    "User"}
                </h3>

                <p className="text-xs text-zinc-500">
                  Astra Member
                </p>

              </div>

            </div>


            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="
                shrink-0

                text-sm
                text-zinc-400

                hover:text-white

                transition-colors
              "
            >
              Logout
            </button>

          </div>

        </div>
      )}


      {/* =====================================================
          DESKTOP SIDEBAR
      ====================================================== */}

      <aside
        className="
          hidden
          md:flex

          w-[250px]

          h-full
          min-h-[calc(100vh-48px)]

          shrink-0

          bg-[#020617]

          border
          border-white/5

          rounded-[28px]

          px-5
          py-8

          flex-col
          justify-between
        "
      >

        {/* ===================================================
            TOP
        ==================================================== */}

        <div>

          <Link
            to="/"
            className="
              text-3xl

              font-serif
              font-light

              tracking-[0.35em]

              text-[#D4AF37]

              text-center

              mb-12

              block
            "
          >
            Astra
          </Link>


          {/* NAV */}

          <nav className="flex flex-col gap-2">

            {menuItems.map((item) => {
              const active =
                location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    flex
                    items-center
                    gap-3

                    px-4
                    py-3

                    rounded-2xl

                    border

                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-[#D4AF37]/10
                          border-[#D4AF37]/20
                          text-[#D4AF37]
                        `
                        : `
                          border-transparent
                          text-zinc-400
                          hover:border-[#D4AF37]/10
                          hover:bg-white/[0.02]
                          hover:text-white
                        `
                    }
                  `}
                >
                  {item.icon}

                  <span className="text-sm tracking-wide">
                    {item.name}
                  </span>
                </Link>
              );
            })}

          </nav>

        </div>


        {/* ===================================================
            BOTTOM
        ==================================================== */}

        <div className="space-y-4">

          {/* PREMIUM */}

          <div
            className="
              bg-white/[0.02]

              border
              border-[#D4AF37]/10

              rounded-3xl

              p-5
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                mb-4
              "
            >

              <Crown
                size={18}
                className="text-[#D4AF37]"
              />

              <h3
                className="
                  text-[#D4AF37]
                  font-medium
                "
              >
                Astra Premium
              </h3>

            </div>


            <p
              className="
                text-sm
                text-zinc-500
                leading-relaxed
                mb-5
              "
            >
              Unlock advanced insights, exclusive
              reports and priority consultations.
            </p>


            <button
              className="
                w-full

                py-3

                rounded-full

                border
                border-[#D4AF37]/20

                text-[#D4AF37]

                hover:bg-[#D4AF37]/10

                transition
              "
            >
              Upgrade
            </button>

          </div>


          {/* USER */}

          <div
            className="
              bg-white/[0.02]

              border
              border-white/5

              rounded-2xl

              p-3

              flex
              items-center

              gap-3

              shadow-sm
              shadow-teal-200
            "
          >

            {/* PROFILE */}

            <div
              className="
                w-10
                h-10

                shrink-0

                rounded-full

                flex
                items-center
                justify-center

                overflow-hidden

                bg-[#D4AF37]/10

                shadow-md
                shadow-pink-200
              "
            >

              {user?.picture ? (
                <img
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-full
                  "
                  src={user.picture}
                  alt="User"
                />
              ) : (
                <User
                  size={18}
                  className="text-[#D4AF37]"
                />
              )}

            </div>


            {/* USER INFO */}

            <div className="min-w-0">

              <h3
                className="
                  text-sm
                  text-white
                  truncate
                "
              >
                {user?.nickname ||
                  user?.name ||
                  "User"}
              </h3>


              <button
                className="
                  text-sm
                  text-zinc-400

                  hover:text-white

                  transition-colors

                  cursor-pointer
                "
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </aside>
    </>
  );
};

export default Sidedashboard;