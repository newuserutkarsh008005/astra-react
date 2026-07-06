import axios from "axios";
import React, { useState } from "react";
import Loading from "../pages/Loading";


const Slotdet = ({updatepayment,coldata}) => {
  const [popup, setpopup] = useState(false);
  const [slotdet, setslotdet] = useState([]);
  const [current, setcurrent] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [state,setState]=useState('Check Available Slot')

  const but = async () => {
    try {
      setLoading(true);
      updatepayment(false)
      const res = await axios.get(
        "https://astra-backend-live-ver1.onrender.com/service/get_slot"
      );
      console.log("the value us here",res)
      const groupedSlots = Object.values(
        res.data.allslot.reduce((acc, slot) => {
          const date = slot.date.split("T")[0];

          if (!acc[date]) {
            acc[date] = {
              date,
              slots: [],
            };
          }

          acc[date].slots.push(slot);

          return acc;
        }, {})
      );

      setslotdet(groupedSlots);
      setpopup(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const next = () => {
    if (current < slotdet.length - 1) {
      setcurrent(current + 1);
      setSelectedSlot(null);
    }
  };

  const prev = () => {
    if (current > 0) {
      setcurrent(current - 1);
      setSelectedSlot(null);
    }
  };

  const closePopup = () => {
    setpopup(false);
    setSelectedSlot(null);
    setcurrent(0)
  };

  const handleBooking = (e) => {
    e.preventDefault();
    coldata(selectedSlot)
updatepayment(true)
setpopup(false)
    if (!selectedSlot) {
      alert("Please select a slot");
      return;
    }
    console.log(e)
    console.log("Selected Slot:", selectedSlot);
    

  };

  if (loading) return <Loading />;

  return (
    <>
      {!popup ? (
        <button
          onClick={but}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold"
        >
         {state}
        </button>
      ) : (
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 overflow-hidden">
          
          {/* Close */}
          <div className="flex justify-end mb-3">
            <button
              onClick={closePopup}
              className="text-red-500 text-xl"
            >
              ✕
            </button>
          </div>

          {slotdet.length === 0 ? (
            <div className="text-center text-gray-400">
              No Slots Available
            </div>
          ) : (
            <>
              {/* Date Navigation */}
              <div className="flex items-center justify-between mb-5">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className="px-3 py-2 rounded-xl bg-white/10 text-white disabled:opacity-30"
                >
                  ←
                </button>

                <div className="text-center">
                  <h2 className="text-white text-xl font-bold">
                    {new Date(
                      slotdet[current].date
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    {current + 1} / {slotdet.length}
                  </p>
                </div>

                <button
                  onClick={next}
                  disabled={current === slotdet.length - 1}
                  className="px-3 py-2 rounded-xl bg-white/10 text-white disabled:opacity-30"
                >
                  →
                </button>
              </div>

              {/* Slots */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {slotdet[current]?.slots.map((slot) => {
                  const status =
                    slot.status?.toUpperCase();

                  const isAvailable =
                    status === "AVAILABLE";

                  const isReserved =
                    status === "RESERVED";

                  const isBooked =
                    status === "BOOKED";

                  return (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => {
                        if (isAvailable) {
                          setSelectedSlot(slot);
                          setState(`${new Date(
                      slotdet[current].date
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })} ${slot.start} to ${slot.end}`)
                        }
                      }}
                      className={`
                        p-3 rounded-xl border transition-all duration-300

                        ${
                          selectedSlot?.id === slot.id
                            ? "ring-2 ring-purple-500 scale-105"
                            : ""
                        }

                        ${
                          isAvailable
                            ? "bg-green-500/20 border-green-500/40 text-green-200 hover:bg-green-500/30"
                            : ""
                        }

                        ${
                          isReserved
                            ? "bg-yellow-500/20 border-yellow-500/40 text-yellow-200 cursor-not-allowed"
                            : ""
                        }

                        ${
                          isBooked
                            ? "bg-red-500/20 border-red-500/40 text-red-200 cursor-not-allowed"
                            : ""
                        }
                      `}
                    >
                      <div className="font-semibold">
                        {slot.start} - {slot.end}
                      </div>

                      <div className="text-xs mt-2">
                        {isAvailable &&
                          "🟢 Available"}
                        {isReserved &&
                          "🟡 Reserved"}
                        {isBooked &&
                          "🔴 Booked"}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Slot */}
             

              {/* Book Button */}
              <form onSubmit={handleBooking}>
                <button
                  type="submit"
                  disabled={!selectedSlot}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold disabled:opacity-40"
                >
                  
                    {state}
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Slotdet;