// import { BrowserRouter } from "react-router";
// import { useEffect, useRef } from "react";
// import Lenis from "lenis";
// import AppRouter from "./routes/router";
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   const lenisRef = useRef(null);

//   // Initialize Lenis on component mount
//   useEffect(() => {
//     // Initialize Lenis
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       orientation: "vertical",
//       gestureOrientation: "vertical",
//       smoothWheel: true,
//       wheelMultiplier: 1,
//       smoothTouch: false,
//       touchMultiplier: 2,
//       infinite: false,
//     });

//     lenisRef.current = lenis;

//     // Sync Lenis with requestAnimationFrame
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     // Cleanup
//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   // Render the app with routing
//   return (
//     <BrowserRouter>
//       <ScrollToTop lenisInstance={lenisRef} />
//       <div className="min-h-screen">
//         <AppRouter />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter } from "react-router";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useMotionValue } from "motion/react";
import AppRouter from "./routes/router";
import ScrollToTop from "./components/ScrollToTop";
import CanonicalTag from "./components/CanonicalTag";
import { LenisContext } from "./context/LenisContext";

function App() {
  const lenisRef = useRef(null);

  // Single shared scrollY motion value — driven by Lenis scroll events
  // All components must use this instead of window.scrollY or useScroll()
  // This ensures animation is always in sync with Lenis virtual scroll position
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;

    // On smaller screens/reduced-motion, skip Lenis RAF loop and use native scroll.
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

    // Update shared scrollY from Lenis — not from window.scrollY
    // This is the key fix: Lenis virtual scroll → motion value → all animations
    lenis.on("scroll", ({ scroll }) => {
      scrollY.set(scroll);
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }


    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
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