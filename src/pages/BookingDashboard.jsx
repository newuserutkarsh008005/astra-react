import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../components/UserContext";
import Sidedashboard from "../components/Sidedashboard";
import { Calendar, Clock, Video } from "lucide-react";

const BookingDashboard = () => {
  const { dbuser } = useUser();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dbuser?.id) {
      async function getBooking() {
        try {
          const res = await axios.post(
            "https://astra-backend-live-ver1.onrender.com/get_all_booking_details",
            {
              id: dbuser.id,
            }
          );

          setBookings(res.data.data);
          console.log(res.data.data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }

      getBooking();
    }
  }, [dbuser]);

  console.log(bookings);

  return (
    <div className="flex min-h-screen bg-[#0B1120] p-6 gap-6 max-md:flex-col max-md:p-3 max-md:gap-3">

      <Sidedashboard />

      <div className="flex-1 p-8 max-md:p-2">

        <h1 className="text-4xl font-bold text-white mb-8 max-md:text-2xl max-md:mb-5">
          All My Booking
        </h1>

        {loading ? (
          <div className="min-h-[260px] flex items-center justify-center">
            <div className="flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#111827] px-5 py-3 shadow-lg shadow-[#D4AF37]/5">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37]" />
              <span className="text-zinc-300">Loading bookings...</span>
            </div>
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center max-md:p-6">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37]" />
            <p className="text-zinc-400">
              No appointments booked yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 max-md:gap-4">

            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="
                  bg-[#111827]
                  border border-[#D4AF37]/20
                  rounded-3xl
                  p-6
                  hover:border-[#D4AF37]/50
                  transition-all

                  max-md:rounded-2xl
                  max-md:p-4
                "
              >

                {/* ================================================= */}
                {/* DESKTOP / WEB — ORIGINAL LAYOUT */}
                {/* ================================================= */}

                <div className="hidden md:flex flex-col md:flex-row justify-between gap-6">

                  {/* Service Details */}
                  <div className="flex gap-5">

                    <img
                      src={booking.service.image}
                      alt={booking.service.title}
                      className="w-32 h-32 rounded-2xl object-cover"
                    />

                    <div>

                      <h2 className="text-2xl font-semibold text-white">
                        {booking.service.title}
                      </h2>

                      <p className="text-zinc-400 mt-1">
                        {booking.service.category}
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-zinc-300">
                        <Calendar size={18} />

                        {new Date(
                          booking.slot.date
                        ).toLocaleDateString("en-IN", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>

                      <div className="flex items-center gap-2 mt-2 text-zinc-300">
                        <Clock size={18} />

                        {booking.slot.start} - {booking.slot.end}
                      </div>

                    </div>
                  </div>

                  {/* Status + Actions */}
                  <div className="flex flex-col justify-between">

                    <span
                      className={`px-4 py-2 rounded-full text-center font-semibold ${
                        booking.status === "CONFIRMED"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {booking.status}
                    </span>

                  </div>
                </div>


                {/* ================================================= */}
                {/* MOBILE ONLY */}
                {/* ================================================= */}

                <div className="md:hidden flex flex-col">

                  {/* Service Image */}
                  <img
                    src={booking.service.image}
                    alt={booking.service.title}
                    className="
                      w-full
                      h-48
                      object-cover
                      rounded-xl
                      mb-4
                    "
                  />

                  {/* Service Information */}
                  <div>

                    <h2 className="text-xl font-semibold text-white break-words">
                      {booking.service.title}
                    </h2>

                    <p className="text-zinc-400 text-sm mt-1">
                      {booking.service.category}
                    </p>

                  </div>

                  {/* Date + Time */}
                  <div className="mt-5 space-y-3">

                    <div className="flex items-start gap-3 text-zinc-300 text-sm">

                      <Calendar
                        size={18}
                        className="text-[#D4AF37] shrink-0 mt-0.5"
                      />

                      <span>
                        {new Date(
                          booking.slot.date
                        ).toLocaleDateString("en-IN", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>

                    </div>

                    <div className="flex items-center gap-3 text-zinc-300 text-sm">

                      <Clock
                        size={18}
                        className="text-[#D4AF37] shrink-0"
                      />

                      <span>
                        {booking.slot.start} - {booking.slot.end}
                      </span>

                    </div>

                  </div>

                  {/* Status */}
                  <div className="mt-5">

                    <span
                      className={`block w-full px-4 py-2.5 rounded-full text-center text-sm font-semibold ${
                        booking.status === "CONFIRMED"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {booking.status}
                    </span>

                  </div>

                  {/* Join Session */}
                  {booking.status === "CONFIRMED" && (
                    <button
                      className="
                        mt-3
                        w-full
                        px-4
                        py-3
                        rounded-full
                        border
                        border-[#D4AF37]/30
                        text-[#D4AF37]
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        hover:bg-[#D4AF37]/10
                        transition
                      "
                    >
                      <Video size={17} />
                      Join Session
                    </button>
                  )}

                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDashboard;