import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";

const FeatureMediaSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const mobileImagesRef = useRef(null);
  const centerVideoUrl =
    "https://dc3v08iv2c2ou.cloudfront.net/Our_work/Video+_in_center.mp4";
  const centerVideoPoster =
    "https://dc3v08iv2c2ou.cloudfront.net/Our_work/Video+_in_center.mp4";
  //   const centerVideoUrl =
  //   "/Our_work/Video _in_center.mp4";
  // const centerVideoPoster =
  //   "/Our_work/Video _in_center.mp4";

  const handleNavigateToPortfolio = () => {
    navigate("/portfolio");
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Mobile/Tablet: Track scroll progress for side images
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileImagesRef,
    offset: ["start end", "end start"],
  });

  // Left video slides IN from left side (starts off-screen, ends at positive value to overlap more)
  const leftVideoX = useTransform(scrollYProgress, [0, 0.5], [-450, 80]);

  // Right image slides IN from right side (starts off-screen, ends at 0)
  const rightImageX = useTransform(scrollYProgress, [0, 0.5], [450, -80]);

  // Opacity for side elements (fade in as they slide)
  const sideOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Mobile: Y position for left and right images (move up on scroll)
  const mobileLeftY = useTransform(mobileScrollProgress, [0, 0.8], [100, -180]);
  const mobileRightY = useTransform(
    mobileScrollProgress,
    [0, 0.8],
    [100, -180],
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white flex flex-col justify-center items-center overflow-hidden fm-container"
    >
      {/* Section Header - aligned to the same container as the media */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-heading-wrapper z-10"
      >
        <div className="max-w-400 mx-auto sm:mx-0 px-4 md:px-6 lg:px-8 text-center lg:text-left our-services-title-margin">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:ml-40">
              <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold tracking-[0.2em] text-secondary our-work-title-margin">
                Our Work
              </h2>
            </div>
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
            className="absolute left-0 z-30 cursor-pointer"
            onClick={handleNavigateToPortfolio}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:w-90 xl:w-75 lg:h-117 xl:h-145 hover:shadow-3xl transition-shadow duration-300">
              <img
                // src="/Our_work/Photo4.JPG"
                src="https://dc3v08iv2c2ou.cloudfront.net/Our_work/Photo4.JPG"
                alt="Completed project showcase"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Center Video - Main focus, centered */}
          <motion.div
            className="z-20 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            onClick={handleNavigateToPortfolio}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:w-175 xl:w-300 lg:h-137.5 xl:h-170 hover:shadow-3xl transition-shadow duration-300">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster={centerVideoPoster}
                className="w-full h-full object-cover"
              >
                <source src={centerVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Image - Positioned on right side */}
          <motion.div
            style={{ x: rightImageX, opacity: sideOpacity }}
            className="absolute right-0 z-30 cursor-pointer"
            onClick={handleNavigateToPortfolio}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:w-90 xl:w-75 lg:h-117 xl:h-145 hover:shadow-3xl transition-shadow duration-300">
              <img
                // src="/Our_work/IMG_1517.JPG"
                src="https://dc3v08iv2c2ou.cloudfront.net/Our_work/IMG_1517.JPG"
                alt="Completed project showcase"
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
            className="cursor-pointer"
            onClick={handleNavigateToPortfolio}
          >
            <div
              className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{ width: "100%", height: "360px" }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster={centerVideoPoster}
                className="w-full h-full object-cover"
              >
                <source src={centerVideoUrl} type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Side media in 2-column grid */}
          <div
            ref={mobileImagesRef}
            className="grid grid-cols-2 gap-3"
            style={{ marginTop: "0" }}
          >
            {/* Left Video */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ padding: "0", y: mobileLeftY }}
              className="cursor-pointer"
              onClick={handleNavigateToPortfolio}
            >
              <div
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ width: "100%", height: "auto" }}
              >
                <img
                  // src="/Our_work/Photo4.JPG"
                  src="https://dc3v08iv2c2ou.cloudfront.net/Our_work/Photo4.JPG"
                  alt="Completed project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ padding: "0", y: mobileRightY }}
              className="cursor-pointer"
              onClick={handleNavigateToPortfolio}
            >
              <div
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ width: "100%", height: "auto" }}
              >
                <img
                  // src="/Our_work/IMG_1517.JPG"
                  src="https://dc3v08iv2c2ou.cloudfront.net/Our_work/IMG_1517.JPG"
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
