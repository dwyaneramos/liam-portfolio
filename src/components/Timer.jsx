import { useState, useEffect } from "react";

export const Timer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const [timeElapsed, suffix] = time.split(" ")
  let [hr, min, ss] = timeElapsed.split(":")
  if (suffix == "pm") {
    hr = parseInt(hr) + 12
  }
  return (
    <div className = "bg-gray-900 p-2 text-2xl text-white">{hr}:{min}:{ss}</div>
  )
};
