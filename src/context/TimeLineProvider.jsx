import { useState } from "react";
import { TimelineContext } from "./TimelineContext";

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      date: new Date().toISOString().split("T")[0],
    };
    setTimeline((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}
