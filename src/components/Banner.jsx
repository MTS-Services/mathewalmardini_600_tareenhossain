import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Banner = () => {
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
      position: "top-20 left-0",
      size: "w-32 h-48",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=350&h=250&fit=crop",
      position: "top-32 left-70",
      size: "w-80 h-52",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
      position: "top-12 left-1/2 -translate-x-1/2",
      size: "w-108 h-53",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=350&h=220&fit=crop",
      position: "top-32 right-72",
      size: "w-80 h-52",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=200&h=280&fit=crop",
      position: "top-20 right-0",
      size: "w-32 h-48",
    },
    // Bottom Row
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=180&h=280&fit=crop",
      position: "bottom-0 left-0",
      size: "w-32 h-48",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=280&fit=crop",
      position: "bottom-12 left-70",
      size: "w-80 h-52",
    },
    // Image 8 removed - video will take this position
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      position: "bottom-12 right-72",
      size: "w-80 h-52",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=300&fit=crop",
      position: "bottom-0 right-0",
      size: "w-32 h-48",
    },
  ];

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
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 ">
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
