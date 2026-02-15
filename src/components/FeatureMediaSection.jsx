import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const FeatureMediaSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Left video slides IN from left side (starts off-screen, ends at positive value to overlap more)
  const leftVideoX = useTransform(scrollYProgress, [0, 0.5], [-450, 80]);

  // Right image slides IN from right side (starts off-screen, ends at 0)
  const rightImageX = useTransform(scrollYProgress, [0, 0.5], [450, -80]);

  // Opacity for side elements (fade in as they slide)
  const sideOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-linear-to-r from-[#2D6B7A]/20 via-[#2D6B7A]/40 to-[#2D6B7A]/40 flex flex-col justify-center items-center overflow-hidden fm-container"
    >
      {/* Section Header - aligned to the same container as the media */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-heading-wrapper z-10"
      >
        <div className="max-w-400 mx-auto sm:mx-0 px-4 md:px-6 lg:px-8 text-center sm:text-left our-services-title-margin">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold tracking-[0.2em] text-secondary">
              Experience Our Work
            </h2>
            <button
              className="hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
              style={{ padding: "16px 24px" }}
              type="button"
            >
              Book Consultation
            </button>
          </div>
          {/* <p className="text-base md:text-lg lg:text-xl text-gray-800/80 max-w-2xl">
            See how we bring visions to life with precision and craftsmanship
          </p> */}
        </div>
      </motion.div>

      {/* Media Layout Container */}
      <div className="relative w-full max-w-400 mx-auto px-4 md:px-6 lg:px-8">
        {/* Desktop Layout: Centered with positioned side elements */}
        <div className="desktop-feature-layout lg:flex lg:items-center lg:justify-center lg:relative">
          {/* Left Video - Positioned on left side */}
          <motion.div
            style={{ x: leftVideoX, opacity: sideOpacity }}
            className="absolute left-0 z-30"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:w-90 xl:w-75 lg:h-117 xl:h-145">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/Home_videos/3d-house-sketch-2026-01-28-03-56-15-utc (2).mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Center Video - Main focus, centered */}
          <motion.div
            className="z-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:w-175 xl:w-300 lg:h-137.5 xl:h-170">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/Home_videos/Construction_Workers_02.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Image - Positioned on right side */}
          <motion.div
            style={{ x: rightImageX, opacity: sideOpacity }}
            className="absolute right-0 z-30"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:w-90 xl:w-75 lg:h-117 xl:h-145">
              <img
                src="/Home_videos/WhatsApp_Image_2023-04-02_at 4.59.34 PM (1).jpeg"
                alt="Completed project showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Tablet Layout: Centered with positioned side elements */}
        <div className="hidden">
          {/* Left Video */}
          <motion.div
            style={{ x: leftVideoX, opacity: sideOpacity }}
            className="absolute left-0 z-30"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl md:w-70 md:h-85">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/Home_videos/3d-house-sketch-2026-01-28-03-56-15-utc (2).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>

          {/* Center Video */}
          <motion.div
            className="z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl md:w-125 md:h-100">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/Home_videos/Construction_Workers_02.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{ x: rightImageX, opacity: sideOpacity }}
            className="absolute right-0 z-30"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl md:w-70 md:h-85">
              <img
                src="/Home_videos/WhatsApp_Image_2023-04-02_at 4.59.34 PM (1).jpeg"
                alt="Completed project"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout: Main image on top, left and right images below */}
        <div
          className="mobile-feature-layout flex flex-col"
          style={{ padding: "0 16px" }}
        >
          {/* Main Video - Featured first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "20px" }}
          >
            <div
              className="relative rounded-xl overflow-hidden shadow-xl"
              style={{ width: "100%", height: "360px" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/Home_videos/Construction_Workers_02.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>

          {/* Side media in 2-column grid */}
          <div className="grid grid-cols-2 gap-3" style={{ marginTop: "0" }}>
            {/* Left Video */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ padding: "0" }}
            >
              <div
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
                style={{ width: "100%", height: "auto" }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/Home_videos/3d-house-sketch-2026-01-28-03-56-15-utc (2).mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ padding: "0" }}
            >
              <div
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
                style={{ width: "100%", height: "auto" }}
              >
                <img
                  src="/Home_videos/WhatsApp_Image_2023-04-02_at 4.59.34 PM (1).jpeg"
                  alt="Completed project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Optional decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default FeatureMediaSection;
