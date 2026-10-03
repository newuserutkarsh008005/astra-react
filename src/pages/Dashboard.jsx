import Content from "../components/Contenr";
import Sidedashboard from "../components/Sidedashboard";
import React from "react";

const Dashboard = () => {
  return (
    <div
      className="
        min-h-screen
        w-full

        bg-[#020617]
        text-white

        relative

        overflow-x-hidden
      "
    >

      {/* Stars */}

      <div
        className="
          absolute
          inset-0

          opacity-20

          bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_1px,_transparent_1px)]
          bg-[size:40px_40px]

          pointer-events-none
        "
      />


      {/* Dashboard */}

      <div
        className="
          relative

          w-full
          min-w-0

          flex
          flex-col
          md:flex-row

          gap-3
          md:gap-6

          p-3
          sm:p-4
          md:p-6
        "
      >

        {/* ===================================================
            MOBILE:
            Astra + hamburger

            DESKTOP:
            Full sidebar
        ==================================================== */}

        <Sidedashboard />


        {/* ===================================================
            CONTENT
        ==================================================== */}

        <main
          className="
            flex-1

            w-full
            min-w-0

            min-h-[calc(100vh-24px)]
            md:min-h-[calc(100vh-48px)]

            rounded-2xl
            sm:rounded-3xl
            md:rounded-[32px]

            border
            border-white/5

            bg-white/[0.02]

            backdrop-blur-sm

            p-4
            sm:p-5
            md:p-8

            overflow-hidden
          "
        >
          <Content />
        </main>

      </div>

    </div>
  );
};

export default Dashboard;