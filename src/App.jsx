import { BrowserRouter } from "react-router";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import AppRouter from "./routes/router";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const lenisRef = useRef(null);

  // Initialize Lenis on component mount
  useEffect(() => {
    // Initialize Lenis
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

    // Sync Lenis with requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  // Render the app with routing
  return (
    <BrowserRouter>
      <ScrollToTop lenisInstance={lenisRef} />
      <div className="min-h-screen">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
