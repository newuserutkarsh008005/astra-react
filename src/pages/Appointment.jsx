import React, { useEffect, useState } from "react";
import Sidedashboard from "../components/Sidedashboard";
import { useUser } from "../components/UserContext";
import axios from "axios";
import { Calendar, Clock, Video } from "lucide-react";

const Appointment = () => {
  const { dbuser } = useUser();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dbuser?.id) {
      async function getBooking() {
        try {
          const res = await axios.post(
            "https://astra-backend-live-ver1.onrender.com/get_booking_details",
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

  return (
    <div className="flex min-h-screen bg-[#0B1120]">
      <Sidedashboard />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          My Appointments
        </h1>

        {loading ? (
          <p className="text-white">Loading...</p>
        ) : bookings.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-zinc-400">
              No appointments booked yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-[#111827] border border-[#D4AF37]/20 rounded-3xl p-6 hover:border-[#D4AF37]/50 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;