"use client";

import { useEffect, useRef, createContext, useContext } from "react";
import Lenis from "lenis";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
};

const SmoothScrollerContext = createContext<LenisInstance | null>(null);
export const useSmoothScroller = () => useContext(SmoothScrollerContext);

interface ScrollContextProps {
  children: React.ReactNode;
}

const ScrollContext = ({ children }: ScrollContextProps) => {
  const lenisRef = useRef<LenisInstance | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.1,
      smoothWheel: true,
      infinite: false,
      gestureOrientation: "vertical",
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollerContext.Provider>
  );
};

export default ScrollContext;
