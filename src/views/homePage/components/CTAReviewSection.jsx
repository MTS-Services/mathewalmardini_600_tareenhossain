import { motion } from "motion/react";

const CTAReviewSection = () => {
  const handleReviewClick = () => {
    window.open(
      "https://g.page/r/CQbQuTEA6ofbEBM/review",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-linear-to-br from-[#2d6b7a] to-[#1a4249] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Star Icons */}
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
              </motion.div>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Love Our Work?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Share your experience and help others discover the quality of our
            renovation services. Your feedback means the world to us!
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={handleReviewClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#2d6b7a] px-8 py-4 rounded-lg text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Leave a Google Review
          </motion.button>

          {/* Subtext */}
          <p className="text-white/70 text-sm md:text-base mt-6">
            Takes less than a minute • Opens in new tab
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAReviewSection;
