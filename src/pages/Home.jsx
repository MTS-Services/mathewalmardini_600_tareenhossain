import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import VideoBackground from "../components/VideoBackground";
import HeroText from "../components/HeroText";

function Home() {
  const { scrollY } = useScroll();
  const videoSlideX = useTransform(scrollY, [0, 300], [0, "100%"]);
  const bannerSlideX = useTransform(scrollY, [0, 300], ["-100%", "0%"]);
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
      {isDesktop ? (
        <>
          <VideoBackground isDesktop={isDesktop} />
          <HeroText isDesktop={isDesktop} />
          <Banner isDesktop={isDesktop} />
        </>
      ) : (
        <>
          <div className="relative min-h-screen overflow-hidden">
            <motion.div className="relative" style={{ x: videoSlideX }}>
              <VideoBackground isDesktop={isDesktop} />
              <HeroText isDesktop={isDesktop} />
            </motion.div>
          </div>
          <motion.div style={{ x: bannerSlideX }}>
            <Banner isDesktop={isDesktop} />
          </motion.div>
        </>
      )}
    </>
  );
}

export default Home;
