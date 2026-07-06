import React from "react";
import Calenderbig from "./Calenderbig";
import {
  Calendar,
  FileText,
  Star,
  User,
  Bell,
  Search,
} from "lucide-react";

const Meet = () => {
  return (
    <div className="relative z-10 min-h-screen p-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome Back, Utkarsh 👋
            </h1>
            <p className="text-gray-300 mt-2">
              Your cosmic journey continues today.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full flex items-center gap-2">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm"
              />
            </div>

            <Bell className="cursor-pointer" />
            
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
          {[
            {
              title: "Total Sessions",
              value: "24",
              icon: <Calendar />,
            },
            {
              title: "Reports",
              value: "18",
              icon: <FileText />,
            },
            {
              title: "Recommendations",
              value: "12",
              icon: <Star />,
            },
            {
              title: "Upcoming",
              value: "3",
              icon: <Calendar />,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-5"
            >
              <div className="flex justify-between items-center">
                {card.icon}
                <p className="text-3xl font-bold">{card.value}</p>
              </div>

              <h3 className="mt-4 text-gray-300">{card.title}</h3>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* Upcoming Session */}
          <div className="col-span-12 lg:col-span-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Upcoming Session
            </h2>

            <div className="bg-white/2 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">
                Career Guidance Consultation
              </h3>

              <p className="text-gray-300 mt-2">
                Astrologer: Dr. Sharma
              </p>

              <p className="text-gray-400 mt-1">
                Today • 7:00 PM
              </p>

              <button className="mt-5 px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:scale-105 transition">
                Join Session
              </button>
            </div>
          </div>

          {/* AI Insights */}
          <div className="col-span-12 lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
            <Calenderbig />
          </div>

          {/* Session History */}
          <div className="col-span-12 lg:col-span-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Session History
            </h2>

            <div className="space-y-3">
              {[
                "Tarot Reading",
                "Marriage Consultation",
                "Kundli Analysis",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white/2 p-4 rounded-xl"
                >
                  <span>{item}</span>

                  <button className="text-yellow-400">
                    View Report
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="col-span-12 lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Recommended Services
            </h2>

            <div className="space-y-4">
              {[
                "Career Reading",
                "Love Consultation",
                "Tarot Reading",
                "Numerology",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/2 rounded-xl p-4 flex justify-between items-center"
                >
                  <span>{service}</span>

                  <button className="text-yellow-400">
                    Book
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Meet;