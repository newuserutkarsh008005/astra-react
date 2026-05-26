import { useEffect, useState } from "react";

function Countdown() {

  const [time, setTime] = useState("");

  useEffect(() => {

    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 10);

    const interval = setInterval(() => {

      const now = Date.now();
      const distance = launchDate - now;

      if (distance < 0) {
        setTime("🚀 Launched!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
      );

      setTime(
        `${days}d ${hours}h ${minutes}m ${seconds}s`
      );

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="text-2xl tracking-[2px] text-white/70 mb-8">
      {time}
    </div>
  );
}

export default Countdown;