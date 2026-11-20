import { lazy, startTransition, Suspense, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Banner from "./components/Banner";
import VideoBackground from "./components/VideoBackground";
import HeroText from "./components/HeroText";

const loadInfoSection = () => import("./components/InfoSection");
const loadFeatureMediaSection = () => import("./components/FeatureMediaSection");
const loadOurServicesSection = () => import("./components/OurServicesSection");
const loadProcessSection = () => import("./components/ProcessSection");
const loadPhotoGallery = () => import("./components/PhotoGallery");
const loadTestimonialSection = () => import("./components/TestimonialSection");
const loadCTAReviewSection = () => import("./components/CTAReviewSection");

const InfoSection = lazy(loadInfoSection);
const FeatureMediaSection = lazy(loadFeatureMediaSection);
const OurServicesSection = lazy(loadOurServicesSection);
const ProcessSection = lazy(loadProcessSection);
const PhotoGallery = lazy(loadPhotoGallery);
const TestimonialSection = lazy(loadTestimonialSection);
const CTAReviewSection = lazy(loadCTAReviewSection);

const SECTION_LOADERS = [
  loadInfoSection,
  loadFeatureMediaSection,
  loadOurServicesSection,
  loadProcessSection,
  loadPhotoGallery,
  loadTestimonialSection,
  loadCTAReviewSection,
];

// Fetch every section's code once the visitor starts scrolling, so each one is ready
// before its placeholder is reached. Waiting for real input keeps it off the first load.
function usePrefetchSectionsOnFirstScroll() {
  useEffect(() => {
    const events = ["wheel", "touchstart", "keydown", "scroll"];
    const prefetch = () => {
      removeListeners();
      SECTION_LOADERS.forEach((load) => load().catch(() => {}));
    };
    const removeListeners = () =>
      events.forEach((type) => window.removeEventListener(type, prefetch));

    events.forEach((type) =>
      window.addEventListener(type, prefetch, { passive: true }),
    );
    return removeListeners;
  }, []);
}

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
          // As a transition, React keeps the placeholder on screen until the section's
          // code has loaded, instead of swapping in a Suspense fallback.
          startTransition(() => setIsVisible(true));
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  // Each section has its own Suspense boundary. With one shared boundary, a section
  // still loading hid every section below the banner, the page shrank and the
  // scroll position jumped.
  return (
    <div ref={placeholderRef} className={isVisible ? "" : minHeight}>
      <Suspense fallback={<div className={minHeight} />}>
        {isVisible ? children : null}
      </Suspense>
    </div>
  );
}

function Home() {
  usePrefetchSectionsOnFirstScroll();
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
    </>
  );
}

export default Home;
