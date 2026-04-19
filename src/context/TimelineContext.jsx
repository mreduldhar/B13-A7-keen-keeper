import { createContext, useContext } from "react";

export const TimelineContext = createContext();

export function useTimeline() {
  return useContext(TimelineContext);
}
