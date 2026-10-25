import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ pathname, children }) => {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }
    return window.innerWidth > 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header isDesktop={isDesktop} pathname={pathname} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
