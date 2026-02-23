import React from "react";
import { motion } from "motion/react";

const InfoSection = () => {
  const features = [
    {
      id: 1,
      eyebrow: "About our Tools",
      title: "Using advanced tools makes work faster and efficient",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16M7 7v13m10-13v13M4 20h16M9.5 10.5h5M9.5 14h5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 4h14a1 1 0 011 1v1H4V5a1 1 0 011-1Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      eyebrow: "About our Goal",
      title: "Make your home back to normal like it was just made",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 11.5 12 5l8 6.5V19a1 1 0 01-1 1h-5v-4H10v4H5a1 1 0 01-1-1v-7.5Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      eyebrow: "About our Workers",
      title: "We have reliable and professional workers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.5 9a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0Zm-3 10a6.5 6.5 0 0113 0v1H5.5v-1Z"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative w-full bg-white info-section-padding"
      //   bg color : bg-[#e8f5ec]
    >
      <div
        className="max-w-6xl flex flex-col info-section-container-gap"
        style={{ margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ display: "grid", rowGap: "14px" }}
        >
          {/* <p className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold tracking-[0.2em] text-secondary">
            Our Focus
          </p> */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 info-section-grid-gap"
          style={{ padding: "0" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group rounded-2xl  overflow-hidden flex flex-col h-full info-section-border"
            >
              <div className="relative flex items-center gap-4 info-section-icon-header-padding">
                <div
                  className="flex items-center justify-center text-primary rounded-xl"
                  style={{ width: "48px", height: "48px" }}
                >
                  {feature.icon}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-black/90 uppercase tracking-wide">
                    {feature.eyebrow}
                  </p>
                </div>
              </div>
              <div
                className="flex-1 flex flex-col gap-3"
                style={{ padding: "24px" }}
              >
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-black/70 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
