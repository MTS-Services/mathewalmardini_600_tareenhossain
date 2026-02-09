import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const HeroText = () => {
  const { scrollY } = useScroll();

  // Hero text fades and moves up as you scroll
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <motion.div
      className="fixed inset-0 z-200 flex items-center justify-center pointer-events-none"
      style={{ opacity, y }}
    >
      <div className="text-center px-4 max-w-5xl">
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          The most powerful website builder? You.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Your vision deserves tools with precision, freedom,
          <br />
          and the power to deliver.
        </motion.p>
        <motion.button
          className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors pointer-events-auto"
          style={{ padding: "15px 20px",marginTop: "20px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
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
