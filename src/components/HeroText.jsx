import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const HeroText = ({ isDesktop = true }) => {
  const { scrollY } = useScroll();

  // Only opacity changes, no movement
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  if (!isDesktop) {
    return (
      <div className="absolute inset-0 z-200 flex items-center justify-center pointer-events-none p-4 sm:p-6 md:p-8">
        <div
          className="text-center w-full max-w-5xl"
          style={{ padding: "0 15px" }}
        >
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            The most powerful website builder? You.
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Your vision deserves tools with precision, freedom,
            <br />
            and the power to deliver.
          </p>
          <button
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-base pointer-events-auto"
            style={{ padding: "10px 15px", marginTop: "20px" }}
          >
            Book Consultation
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-200 flex items-center justify-center pointer-events-none"
      style={{ opacity }}
    >
      <div className="text-center px-4 max-w-5xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          The most powerful website builder? You.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
          Your vision deserves tools with precision, freedom,
          <br />
          and the power to deliver.
        </p>
        <motion.button
          className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors pointer-events-auto"
          style={{ padding: "15px 20px", marginTop: "20px" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Consultation
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroText;
