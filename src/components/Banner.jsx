import React from "react";
import { motion } from "motion/react";

const Banner = () => {
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
      size: "w-92 h-64",
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
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=380&h=320&fit=crop",
      position: "-bottom-12 left-1/2 -translate-x-1/2",
      size: "w-92 h-64",
    },
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
    <div className="relative min-h-screen bg-gradient-to-r from-[#f17af3]/40 via-[#f9c5f8]/30 to-white/20 overflow-hidden py-20 z-20">
      {/* Grid Section */}
      <div className="relative h-200 mx-auto px-4">
        {/* Background Images Grid */}
        {portfolioImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={`absolute ${image.position} ${image.size}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
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
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 ">
              The professional standard for web creation
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
