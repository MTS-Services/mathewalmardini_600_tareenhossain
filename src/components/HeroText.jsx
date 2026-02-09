import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const HeroText = () => {
  const { scrollY } = useScroll();

  // Only opacity changes, no movement
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

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
          Get started
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroText;
