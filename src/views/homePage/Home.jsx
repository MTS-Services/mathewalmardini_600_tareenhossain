import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Banner from "./components/Banner";
import VideoBackground from "./components/VideoBackground";
import HeroText from "./components/HeroText";
// Sections are imported normally, not lazy-loaded on scroll. Loading them as the
// visitor scrolled put short placeholders in the page that were swapped for much taller
// sections (Process: ~400px placeholder, ~3800px real). On a first visit the page
// showed blank areas and then grew by thousands of pixels mid-scroll, so it jumped.
// Rendering them up front gives the page its real height from the start; their images
// and videos still load lazily.
import InfoSection from "./components/InfoSection";
import FeatureMediaSection from "./components/FeatureMediaSection";
import OurServicesSection from "./components/OurServicesSection";
import ProcessSection from "./components/ProcessSection";
import PhotoGallery from "./components/PhotoGallery";
import TestimonialSection from "./components/TestimonialSection";
import CTAReviewSection from "./components/CTAReviewSection";

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
      <h1 className="sr-only">Kitchen, Bathroom &amp; Laundry Renovation Specialists Melbourne | B-Spoke</h1>
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
      {/* Same wrapper divs the sections had before, so the layout is unchanged */}
      <div><InfoSection /></div>
      <div><FeatureMediaSection /></div>
      <div><OurServicesSection /></div>
      <div><ProcessSection /></div>
      <div><PhotoGallery /></div>
      <div><TestimonialSection /></div>
      <div><CTAReviewSection /></div>
    </>
  );
}

export default Home;
