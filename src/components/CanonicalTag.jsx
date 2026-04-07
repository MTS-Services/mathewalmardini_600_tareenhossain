import { useEffect } from "react";
import { useLocation } from "react-router";

const BASE_URL = "https://www.b-spoke.com.au";

const CanonicalTag = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Homepage keeps trailing slash; all other pages do not
    const canonical =
      pathname === "/" ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [pathname]);

  return null;
};

export default CanonicalTag;
