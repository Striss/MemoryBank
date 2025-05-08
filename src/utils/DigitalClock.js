import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  
  const formatWeekday = (date) =>
    date.toLocaleDateString("en-US", { weekday: "long" });

  const formatMonthDay = (date) =>
    date.toLocaleDateString("en-US", { month: "long", day: "numeric" });

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
        background: "linear-gradient(145deg, #1e1e1e, #2a2a2a)",
        color: "#ffffff",
        padding: "16px",
        borderRadius: "16px",
        textAlign: "center",
        minWidth: "300px",
      }}
    >
      <div style={{ fontSize: "2.2em", fontWeight: "600", marginBottom: "8px", color: "#00d4ff" }}>
        {formatTime(time)}
      </div>
      <div style={{ fontSize: "1em", fontWeight: "500", opacity: 0.85 }}>
        {formatWeekday(time)}
      </div>
      <div style={{ fontSize: "1em", fontWeight: "500", opacity: 0.7 }}>
        {formatMonthDay(time)}
      </div>
    </div>
  );
};

export default DigitalClock;
