import React, { useEffect, useState } from "react";

const Meetleft = ({ startTime, setisjoin, setzero }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!startTime) return;

    const timer = setInterval(() => {
      const target = new Date(startTime);
      const now = new Date();

      const diff = target - now;

      // Meeting started
      if (diff <= 0) {
        setzero(true);
        setisjoin(true);
        setTimeLeft("Meeting Started");
        clearInterval(timer);
        return;
      }

      // Allow joining 15 minutes before
      if (diff <= 15 * 60 * 1000) {
        setisjoin(true);
      }

      const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
          (1000 * 60)
      );

      const seconds = Math.floor(
        (diff % (1000 * 60)) / 1000
      );

      setTimeLeft(
        `${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, setisjoin, setzero]);

  return (
    <div className="text-2xl font-bold text-green-500">
      <h1 className="text-emerald-500">
        Time Left
      </h1>
      {timeLeft}
    </div>
  );
};

export default Meetleft;