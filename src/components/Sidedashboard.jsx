import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  FileText,
  Bot,
  CreditCard,
  Settings,
  Crown,
  User,
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
  // {
  //   name: "Reports",
  //   icon: <FileText size={18} />,
  //   path: "/reports",
  // },
  
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
  
  return (
    <aside
      className="
      w-[250px]
     h-full
      bg-[#020617]
      border
      border-white/5
      rounded-[28px]
      px-5
      py-8
      flex
      flex-col
      justify-between
    "
    >
      {/* Top */}
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
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              text-zinc-400
              border
              border-transparent
              hover:border-[#D4AF37]/10
              hover:bg-white/[0.02]
              hover:text-white
              transition-all
              duration-300
              "
            >
              {item.icon}
              <span className="text-sm tracking-wide">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className="space-y-4">
        {/* Premium */}
        <div
          className="
          bg-white/[0.02]
          border
          border-[#D4AF37]/10
          rounded-3xl
          p-5
          "
        >
          <div className="flex items-center gap-2 mb-4">
            <Crown size={18} className="text-[#D4AF37]" />

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
            Unlock advanced insights, exclusive reports and priority
            consultations.
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

        {/* User */}
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
          shadow-sm shadow-teal-200
          "
        >
          <div
            className="
            w-fit
            h-fit
            rounded-full
            
            
            flex
            items-center
            justify-center
           
           overflow-hidden
           shadow-md shadow-pink-200
            "
          >
            <img
              className="rounded-full cursor-pointer  "
              src={user.picture}
              alt="User"
            />
            <User size={16} className="text-[#D4AF37]" />
          </div>

          <div>
            <h3 className="text-sm text-white">{user.nickname}</h3>

            <button
              className="hover:cursor-pointer"
              onClick={() =>
                logout({
                  logoutparams: {
                    returnTo: window.location.origin,
                  },
                })
              }
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidedashboard;
