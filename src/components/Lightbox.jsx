import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Lightbox = ({ images, currentIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-4 right-4 z-[10001] bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </motion.button>

      {/* Image Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[10001] bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm md:text-base">
        {activeIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      {images.length > 1 && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-2 md:left-4 z-[10001] bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 md:right-4 z-[10001] bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      )}

      {/* Image Container */}
      <div
        className="relative w-[95vw] md:w-[85vw] lg:w-[70vw] h-[80vh] flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={images[activeIndex].src}
              alt={`Portfolio ${images[activeIndex].category} ${images[activeIndex].id}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Info */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[10001] bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm capitalize">
        {images[activeIndex].category}
      </div>
    </motion.div>
  );
};

export default Lightbox;
