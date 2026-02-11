import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoBackground from "./VideoBackground";
import HeroText from "./HeroText";

const Banner = ({ isDesktop = true }) => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { scrollY } = useScroll();

  // Video scales from 1 to 0.23 over 0-800px scroll
  // At 60% scale (0.6), scroll position is approximately 415px
  // We'll fade in images between scroll 300-500px, then fade out before spacer ends
  // Fade out completes at ~1600px to ensure clean transition before 250vh ends
  // Keep the banner visible until the Info section comes into view
  const imagesOpacity = useTransform(
    scrollY,
    [300, 500, 2100, 2400],
    [0, 1, 1, 0],
  );
  const imagesScale = useTransform(scrollY, [300, 500], [0.6, 1]);

  const portfolioImages = [
    // Top Row
    {
      id: 1,
      url: "/banner_image/IMG_1490.JPG",
      position: "lg:top-22 xl:top-26 2xl:top-30 left-0",
      size: "lg:w-20 lg:h-32 xl:w-28 xl:h-40 2xl:w-32 2xl:h-48",
    },
    {
      id: 2,
      url: "/banner_video/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc.mov",
      type: "video",
      position:
        "lg:top-30 xl:top-38 2xl:top-42 lg:left-28 xl:left-50 2xl:left-70",
      size: "lg:w-48 lg:h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-52",
    },
    {
      id: 3,
      url: "/banner_video/beautiful-modern-bathroom-bathtub-washbasin-sa-2026-01-28-02-42-23-utc (1).mp4",
      type: "video",
      position: "lg:top-18 xl:top-32 2xl:top-35 left-1/2 -translate-x-1/2",
      size: "lg:w-64 lg:h-36 xl:w-80 xl:h-44 2xl:w-108 2xl:h-53",
    },
    {
      id: 4,
      url: "/banner_image/IMG_1278.JPG",
      position:
        "lg:top-30 xl:top-38 2xl:top-42 lg:right-28 xl:right-50 2xl:right-72",
      size: "lg:w-48 lg:h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-52",
    },
    {
      id: 5,
      url: "/banner_image/IMG_1530.JPG",
      position: "lg:top-22 xl:top-26 2xl:top-30 right-0",
      size: "lg:w-20 lg:h-32 xl:w-28 xl:h-40 2xl:w-32 2xl:h-48",
    },
    // Bottom Row
    {
      id: 6,
      url: "/banner_image/IMG_4148.JPG",
      position: "lg:bottom-22 xl:bottom-14 2xl:bottom-10 left-0",
      size: "lg:w-20 lg:h-32 xl:w-28 xl:h-40 2xl:w-32 2xl:h-48",
    },
    {
      id: 7,
      url: "/banner_image/Double_Glass_Window_(After).jpg",
      position:
        "lg:bottom-28 xl:bottom-20 2xl:bottom-22 lg:left-28 xl:left-50 2xl:left-70",
      size: "lg:w-48 lg:h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-52",
    },
    // Image 8 removed - video will take this position
    {
      id: 9,
      url: "/banner_video/isometric-bathroom-2026-01-28-03-56-56-ut.mp4",
      type: "video",
      position:
        "lg:bottom-28 xl:bottom-20 2xl:bottom-22 lg:right-28 xl:right-50 2xl:right-72",
      size: "lg:w-48 lg:h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-52",
    },
    {
      id: 10,
      url: "/banner_image/Keynton 3.jpg",
      position: "lg:bottom-22 xl:bottom-14 2xl:bottom-10 right-0",
      size: "lg:w-20 lg:h-32 xl:w-28 xl:h-40 2xl:w-32 2xl:h-48",
    },
  ];

  const mobileImages = [
    {
      id: 1,
      url: portfolioImages[0].url,
      position: "top-14 left-0",
      size: "w-15 h-28 md:w-20 md:h-32 lg:w-48 lg:h-40",
      radius: "rounded-r-lg",
    },
    {
      id: 2,
      url: portfolioImages[1].url,
      position: "top-8 left-1/2 -translate-x-1/2",
      size: "w-38 h-25 md:w-20 md:h-32 lg:w-68 lg:h-40",
      radius: "rounded-lg",
    },
    {
      id: 3,
      url: portfolioImages[2].url,
      position: "top-15 right-0",
      size: "w-15 h-28 md:w-20 md:h-32 lg:w-48 lg:h-40",
      radius: "rounded-lg",
    },
    {
      id: 4,
      url: portfolioImages[6].url,
      position: "bottom-14 left-0",
      size: "w-15 h-28 md:w-20 md:h-32 lg:w-48 lg:h-40",
      radius: "rounded-r-lg",
    },
    {
      id: 5,
      url: portfolioImages[7].url,
      position: "bottom-8 right-1/2 translate-x-1/2",
      size: "w-38 h-25 md:w-20 md:h-32 lg:w-68 lg:h-40",
      radius: "rounded-lg",
    },
    {
      id: 6,
      url: portfolioImages[8].url,
      position: "bottom-15 right-0",
      size: "w-15 h-28 md:w-20 md:h-32 lg:w-48 lg:h-40",
      radius: "rounded-lg",
    },
  ];

  const tabletImages = [
    {
      id: 1,
      url: portfolioImages[0].url,
      position: "top-16 left-0",
      size: "w-30 h-40",
      radius: "rounded-r-lg",
    },
    {
      id: 2,
      url: portfolioImages[1].url,
      position: "top-10 left-1/2 -translate-x-1/2",
      size: "w-70 h-40",
      radius: "rounded-lg",
    },
    {
      id: 3,
      url: portfolioImages[2].url,
      position: "top-16 right-0",
      size: "w-30 h-40",
      radius: "rounded-l-lg",
    },
    {
      id: 4,
      url: portfolioImages[6].url,
      position: "bottom-16 left-0",
      size: "w-30 h-40",
      radius: "rounded-r-lg",
    },
    {
      id: 5,
      url: portfolioImages[7].url,
      position: "bottom-10 right-1/2 translate-x-1/2",
      size: "w-70 h-40",
      radius: "rounded-lg",
    },
    {
      id: 6,
      url: portfolioImages[8].url,
      position: "bottom-16 right-0",
      size: "w-30 h-40",
      radius: "rounded-l-lg",
    },
  ];

  if (!isDesktop) {
    const imagesToUse = isMobile
      ? mobileImages
      : isTablet
        ? tabletImages
        : mobileImages;

    return (
      <section className="relative py-8 md:py-16">
        <div className="absolute inset-0 bg-linear-to-r from-[#2D6B7A]/80 via-[#2D6B7A]/40 to-[#2D6B7A]/20" />
        <div className="relative mx-auto px-4 md:px-6">
          {imagesToUse.map((image) => {
            // Find the corresponding portfolio item to check if it's a video
            const portfolioItem = portfolioImages.find(
              (p) => p.url === image.url,
            );
            return (
              <div
                key={image.id}
                className={`absolute ${image.position} ${image.size} ${image.radius} overflow-hidden shadow-lg`}
              >
                {portfolioItem?.type === "video" ? (
                  <video
                    src={image.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={image.url}
                    alt={`Portfolio ${image.id}`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                )}
              </div>
            );
          })}

          <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center max-w-2xl md:max-w-3xl px-2 md:px-0">
              Perfect Solution For Your Renovation
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Intro gradient: solid layer to show before video */}
        <motion.div className="absolute inset-0 bg-linear-to-r from-[#2D6B7A]/80 via-[#2D6B7A]/40 to-[#2D6B7A]/20 z-30 pointer-events-none" />

        {/* Initial Gradient Background - Always visible */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-[#2D6B7A]/80 via-[#2D6B7A]/40 to-[#2D6B7A]/20 z-5"
          style={{ opacity: imagesOpacity }}
        />

        {/* Grid Section - behind video, fades in when video shrinks */}
        <motion.div
          className="absolute inset-0 overflow-hidden z-10"
          style={{ opacity: imagesOpacity }}
        >
          <div className="relative h-full mx-auto px-2 md:px-4 flex items-center">
            {/* Background Images Grid */}
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`absolute ${image.position} ${image.size}`}
                style={{
                  scale: imagesScale,
                  opacity: imagesOpacity,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full h-full group cursor-pointer">
                  {image.type === "video" ? (
                    <video
                      src={image.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={`w-full h-full object-cover object-center shadow-xl ${
                        image.id === 1 || image.id === 6
                          ? "rounded-r-lg"
                          : image.id === 5 || image.id === 10
                            ? "rounded-l-lg"
                            : "rounded-lg"
                      }`}
                    />
                  ) : (
                    <img
                      src={image.url}
                      alt={`Portfolio ${image.id}`}
                      className={`w-full h-full object-cover object-center shadow-xl ${
                        image.id === 1 || image.id === 6
                          ? "rounded-r-lg"
                          : image.id === 5 || image.id === 10
                            ? "rounded-l-lg"
                            : "rounded-lg"
                      }`}
                      loading="lazy"
                    />
                  )}
                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ${
                      image.id === 1 || image.id === 6
                        ? "rounded-r-lg"
                        : image.id === 5 || image.id === 10
                          ? "rounded-l-lg"
                          : "rounded-lg"
                    }`}
                  />
                </div>
              </motion.div>
            ))}

            {/* Center Text */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center px-2 md:px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[56px] font-bold text-gray-900 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl mx-auto">
                  Perfect Solution For Your Renovation
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        <VideoBackground isDesktop={isDesktop} position="absolute" />
        <HeroText isDesktop={isDesktop} position="absolute" />
      </div>
    </section>
  );
};

export default Banner;
