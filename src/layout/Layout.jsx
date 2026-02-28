import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
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
      <Header isDesktop={isDesktop} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
