import { createContext, useContext } from "react";
import { useMotionValue } from "motion/react";

export const LenisContext = createContext(null);

export const useLenisScroll = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenisScroll must be used inside LenisProvider");
  }
  return context;
};