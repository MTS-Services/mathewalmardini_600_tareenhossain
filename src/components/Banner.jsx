import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

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
  // We'll fade in images between scroll 300-500px
  const imagesOpacity = useTransform(scrollY, [300, 500], [0, 1]);
  const imagesScale = useTransform(scrollY, [300, 500], [0.6, 1]);

  const portfolioImages = [
    // Top Row
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=280&fit=crop",
      position: "lg:top-12 xl:top-16 2xl:top-20 left-0",
      size: "lg:w-20 lg:h-32 xl:w-28 xl:h-40 2xl:w-32 2xl:h-48",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=350&h=250&fit=crop",
      position:
        "lg:top-20 xl:top-28 2xl:top-32 lg:left-28 xl:left-50 2xl:left-70",
      size: "lg:w-48 lg:h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-52",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
      position: "lg:top-8 xl:top-10 2xl:top-12 left-1/2 -translate-x-1/2",
      size: "lg:w-64 lg:h-36 xl:w-80 xl:h-44 2xl:w-108 2xl:h-53",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=350&h=220&fit=crop",
      position:
        "lg:top-20 xl:top-28 2xl:top-32 lg:right-28 xl:right-50 2xl:right-72",
      size: "lg:w-48 lg:h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-52",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=200&h=280&fit=crop",
      position: "lg:top-12 xl:top-16 2xl:top-20 right-0",
      size: "lg:w-20 lg:h-32 xl:w-28 xl:h-40 2xl:w-32 2xl:h-48",
    },
    // Bottom Row
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=180&h=280&fit=crop",
      position: "lg:bottom-2 xl:bottom-4 2xl:bottom-0 left-0",
      size: "lg:w-20 lg:h-32 xl:w-28 xl:h-40 2xl:w-32 2xl:h-48",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=280&fit=crop",
      position:
        "lg:bottom-8 xl:bottom-10 2xl:bottom-12 lg:left-28 xl:left-50 2xl:left-70",
      size: "lg:w-48 lg:h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-52",
    },
    // Image 8 removed - video will take this position
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      position:
        "lg:bottom-8 xl:bottom-10 2xl:bottom-12 lg:right-28 xl:right-50 2xl:right-72",
      size: "lg:w-48 lg:h-32 xl:w-64 xl:h-40 2xl:w-80 2xl:h-52",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=300&fit=crop",
      position: "lg:bottom-2 xl:bottom-4 2xl:bottom-0 right-0",
      size: "lg:w-20 lg:h-32 xl:w-28 xl:h-40 2xl:w-32 2xl:h-48",
    },
  ];

  const mobileImages = [
    {
      id: 1,
      url: portfolioImages[0].url,
      position: "top-14 left-0",
      size: "w-15 h-28",
      radius: "rounded-r-lg",
    },
    {
      id: 2,
      url: portfolioImages[1].url,
      position: "top-8 left-1/2 -translate-x-1/2",
      size: "w-38 h-25",
      radius: "rounded-lg",
    },
    {
      id: 3,
      url: portfolioImages[2].url,
      position: "top-15 right-0",
      size: "w-15 h-28",
      radius: "rounded-lg",
    },
    {
      id: 4,
      url: portfolioImages[6].url,
      position: "bottom-14 left-0",
      size: "w-15 h-28",
      radius: "rounded-r-lg",
    },
    {
      id: 5,
      url: portfolioImages[7].url,
      position: "bottom-8 right-1/2 translate-x-1/2",
      size: "w-38 h-25",
      radius: "rounded-lg",
    },
    {
      id: 6,
      url: portfolioImages[8].url,
      position: "bottom-15 right-0",
      size: "w-15 h-28",
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
      <section className="relative  py-16">
        <div className="absolute inset-0 bg-linear-to-r from-[#f17af3]/80 via-[#f17af3]/40 to-[#fde8ff]/40" />
        <div className="relative mx-auto px-6">
          {imagesToUse.map((image) => (
            <div
              key={image.id}
              className={`absolute ${image.position} ${image.size} ${image.radius} overflow-hidden shadow-lg`}
            >
              <img
                src={image.url}
                alt={`Portfolio ${image.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}

          <div className="relative flex items-center justify-center min-h-[70vh]">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center max-w-3xl">
              The professional standard for web creation
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="relative min-h-[200vh]">
      {/* Initial Gradient Background - Always visible */}
      <div className="fixed top-0 left-0 w-full h-screen bg-linear-to-r from-[#f17af3]/80 via-[#f17af3]/40  to-[#fde8ff]/40 z-5" />

      {/* Grid Section - fixed behind video, fades in when video shrinks */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10"
        style={{ opacity: imagesOpacity }}
      >
        <div className="relative h-full mx-auto px-4 flex items-center">
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
                <img
                  src={image.url}
                  alt={`Portfolio ${image.id}`}
                  className={`w-full h-full object-cover shadow-xl ${
                    image.id === 1 || image.id === 6
                      ? "rounded-r-lg"
                      : image.id === 5 || image.id === 10
                        ? "rounded-l-lg"
                        : "rounded-lg"
                  }`}
                  loading="lazy"
                />
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
            <div className="text-center px-4">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-gray-900 max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl mx-auto">
                The professional standard for web creation
              </h2>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll spacer */}
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Banner;
