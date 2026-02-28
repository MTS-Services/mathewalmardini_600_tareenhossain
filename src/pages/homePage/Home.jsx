import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Banner from "./components/Banner";
import VideoBackground from "./components/VideoBackground";
import HeroText from "./components/HeroText";
import InfoSection from "./components/InfoSection";
import FeatureMediaSection from "./components/FeatureMediaSection";
import OurServicesSection from "./components/OurServicesSection";
import ProcessSection from "./components/ProcessSection";
import PhotoGallery from "./components/PhotoGallery";
import TestimonialSection from "./components/TestimonialSection";

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
      {isDesktop ? (
        <>
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
      <InfoSection />
      <FeatureMediaSection />
      <OurServicesSection />
      <ProcessSection />
      <PhotoGallery />
      <TestimonialSection />
    </>
  );
}

export default Home;
