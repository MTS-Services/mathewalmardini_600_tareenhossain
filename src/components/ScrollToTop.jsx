import { useEffect } from "react";

function ScrollToTop({ lenisInstance }) {
  useEffect(() => {
    // Reset Lenis scroll position if it exists
    if (lenisInstance?.current) {
      lenisInstance.current.scrollTo(0, { immediate: true });
    }

    // Also force browser scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [lenisInstance]);

  return null;
}

export default ScrollToTop;
