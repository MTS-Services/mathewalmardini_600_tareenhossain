import { BrowserRouter } from "react-router";
import { useEffect, useRef } from "react";
import { useMotionValue } from "motion/react";
import AppRouter from "./routes/router";
import ScrollToTop from "./components/ScrollToTop";
import CanonicalTag from "./components/CanonicalTag";
import { LenisContext } from "./context/LenisContext";

function App() {
  const lenisRef = useRef(null);

  // Single shared scrollY motion value — driven by Lenis (or native scroll on mobile)
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;

    // On smaller screens/reduced-motion, skip Lenis and use native scroll.
    if (prefersReducedMotion || isMobileViewport) {
      const handleNativeScroll = () => {
        scrollY.set(window.scrollY || window.pageYOffset || 0);
      };

      handleNativeScroll();
      window.addEventListener("scroll", handleNativeScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleNativeScroll);
      };
    }

    let cancelled = false;
    let rafId;
    let idleId;
    let timeoutId;

    const startLenis = async () => {
      if (cancelled) return;
      // Defer Lenis so it is not on the critical first-paint path
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      lenis.on("scroll", ({ scroll }) => {
        scrollY.set(scroll);
      });

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    if ("requestIdleCallback" in window) {
      idleId = requestIdleCallback(() => {
        void startLenis();
      }, { timeout: 2500 });
    } else {
      timeoutId = setTimeout(() => {
        void startLenis();
      }, 1200);
    }

    return () => {
      cancelled = true;
      if (idleId != null && "cancelIdleCallback" in window) {
        cancelIdleCallback(idleId);
      }
      if (timeoutId != null) clearTimeout(timeoutId);
      if (rafId != null) cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [scrollY]);

  return (
    <LenisContext.Provider value={{ scrollY, lenisRef }}>
      <BrowserRouter>
        <CanonicalTag />
        <ScrollToTop lenisInstance={lenisRef} />
        <div className="min-h-screen">
          <AppRouter />
        </div>
      </BrowserRouter>
    </LenisContext.Provider>
  );
}

export default App;
