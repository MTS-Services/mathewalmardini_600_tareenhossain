import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Banner from "./components/Banner";
import VideoBackground from "./components/VideoBackground";
import HeroText from "./components/HeroText";
import usePageMeta from "../../hooks/usePageMeta";

const InfoSection = lazy(() => import("./components/InfoSection"));
const FeatureMediaSection = lazy(() => import("./components/FeatureMediaSection"));
const OurServicesSection = lazy(() => import("./components/OurServicesSection"));
const ProcessSection = lazy(() => import("./components/ProcessSection"));
const PhotoGallery = lazy(() => import("./components/PhotoGallery"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection"));
const CTAReviewSection = lazy(() => import("./components/CTAReviewSection"));

function DeferredSection({ children, minHeight = "min-h-[35vh]", rootMargin = "300px" }) {
  const placeholderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = placeholderRef.current;
    if (!node || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={placeholderRef} className={isVisible ? "" : minHeight}>
      {isVisible ? children : null}
    </div>
  );
}

function Home() {
  usePageMeta(
    "Home Renovations Melbourne | B-Spoke Builders",
    "Melbourne home renovation experts for kitchens, bathrooms, laundry & shop fitouts. Quality craftsmanship and tailored building solutions."
  );
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
      <Suspense fallback={<div className="min-h-[40vh]" />}>
        <DeferredSection minHeight="min-h-[35vh]">
          <InfoSection />
        </DeferredSection>
        <DeferredSection minHeight="min-h-[60vh]">
          <FeatureMediaSection />
        </DeferredSection>
        <DeferredSection minHeight="min-h-[60vh]">
          <OurServicesSection />
        </DeferredSection>
        <DeferredSection minHeight="min-h-[45vh]">
          <ProcessSection />
        </DeferredSection>
        <DeferredSection minHeight="min-h-[60vh]">
          <PhotoGallery />
        </DeferredSection>
        <DeferredSection minHeight="min-h-[45vh]">
          <TestimonialSection />
        </DeferredSection>
        <DeferredSection minHeight="min-h-[30vh]">
          <CTAReviewSection />
        </DeferredSection>
      </Suspense>
    </>
  );
}

export default Home;
