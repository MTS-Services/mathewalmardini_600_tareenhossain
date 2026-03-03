import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop({ lenisInstance }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset Lenis scroll position if it exists
    if (lenisInstance?.current) {
      lenisInstance.current.scrollTo(0, { immediate: true });
    }

    // Also force browser scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, lenisInstance]);

  return null;
}

export default ScrollToTop;
