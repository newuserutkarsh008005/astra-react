
import Content from "../components/Contenr";
import Sidedashboard from "../components/Sidedashboard";
import React from "react";

const Dashboard = () => {
  return (
    <div
      className="
      min-h-screen
      bg-[#020617]
      text-white
      relative
      overflow-hidden
    "
    >
      {/* subtle stars */}
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

      <div className="relative flex p-6 gap-6">
       <Sidedashboard />

        <main
          className="
          flex-1
          min-h-[calc(100vh-48px)]
          rounded-[32px]
          border
          border-white/5
          bg-white/[0.02]
          backdrop-blur-sm
          p-8
        "
        >
          <Content />
        
        </main>
      </div>
    </div>
  );
};

export default Dashboard;