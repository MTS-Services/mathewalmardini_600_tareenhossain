import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  {
    id: 1,
    src: "/PhotoGallery/20240604_153801_(1).jpg",
  },
  { id: 2, src: "/PhotoGallery/20250404_123149.jpg" },
  { id: 3, src: "/PhotoGallery/Bath.jpg" },
  { id: 4, src: "/PhotoGallery/Craigieburn 5.jpg" },
  { id: 5, src: "/PhotoGallery/IMG_9819.JPG" },
];

const PhotoGallery = () => {
  const [expandedId, setExpandedId] = useState(1);
  const [imageCount, setImageCount] = useState(5);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = from right, -1 = from left

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      if (width >= 1024 && width <= 1439) {
        setImageCount(4);
      } else if (width >= 1024) {
        setImageCount(5);
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        // Even index (0,2,4...) came from right, odd (1,3...) came from left
        // Next slide: if next is odd → from right, if next is even → from left
        setDirection(next % 2 === 1 ? 1 : -1);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const displayedImages = images.slice(0, imageCount);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="bg-white" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      {/* Section Title */}
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h2 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl">
          OUR GALLERY
        </h2>
      </div>

      {/* Mobile Carousel - Single Image */}
      {isMobile && (
        <div
          style={{
            position: "relative",
            width: "90%",
            maxWidth: "500px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            aspectRatio: "1/1",
          }}
        >
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={images[currentIndex].src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Text Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1rem",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  color: "white",
                }}
              >
                <h3 style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {images[currentIndex].title}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div
            style={{
              position: "absolute",
              bottom: "0.75rem",
              right: "0.75rem",
              display: "flex",
              gap: "6px",
              zIndex: 10,
            }}
          >
            {images.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === currentIndex ? "18px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background:
                    i === currentIndex
                      ? "white"
                      : "rgba(255,255,255,0.5)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Desktop Horizontal Expanding Gallery */}
      {!isMobile && (
        <div
          className="flex items-center justify-center h-[400px] md:h-[500px] overflow-hidden"
          style={{ gap: "1rem", width: "90%", margin: "0 auto" }}
        >
          {displayedImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ borderRadius: 20 }}
              animate={{
                width: expandedId === image.id ? "1000px" : "600px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onHoverStart={() => setExpandedId(image.id)}
              onHoverEnd={() => setExpandedId(1)}
              className="relative h-full cursor-pointer overflow-hidden shadow-xl"
              style={{ borderRadius: "20px" }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {expandedId === image.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white"
                  style={{ padding: "1.5rem" }}
                >
                  <h3 className="text-lg md:text-xl font-bold">
                    {image.title}
                  </h3>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;