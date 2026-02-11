import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const OurServicesSection = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const firstCardRef = useRef(null);

  
  const services = [
    {
      id: 1,
      title: "Bathroom Renovation",
      description:
        "Transform your bathroom with creative design and functional planning. Our team delivers end-to-end construction services for a beautiful, practical space.",
      video: "/banner_video/isometric-bathroom-2026-01-28-03-56-56-ut.mp4",
    },
    {
      id: 2,
      title: "Kitchen Renovation",
      description:
        "Complete kitchen renovation from design to construction with warranty on labor and materials. Highest quality, transparent process, and excellent results within your budget.",
      video: "/Home_videos/isometric-kitchen-4k-2026-01-28-02-33-39-utc.mp4",
    },
    {
      id: 3,
      title: "Laundry Renovation",
      description:
        "Expert laundry room renovation from planning and design to plumbing installation, ensuring everything is done correctly.",
      video:
        "/banner_video/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc.mov",
    },
    {
      id: 4,
      title: "Design Service",
      description:
        "Custom design plans tailored to your priorities and budget. We focus on what matters most to you for maximum enjoyment of your space.",
      video:
        "/Home_videos/3d-minimalist-modern-house-building-animation-2026-01-28-05-07-41-utc.mp4",
    },
  ];

  // Scroll-driven animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic calculation for horizontal scroll distance
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const calculateScrollDistance = () => {
      if (!stickyRef.current || !firstCardRef.current) return;

      // Get actual dimensions from DOM
      const stickyElement = stickyRef.current;
      const firstCard = firstCardRef.current;

      // Get viewport width of sticky container
      const stickyWidth = stickyElement.offsetWidth;
      const stickyStyle = getComputedStyle(stickyElement);
      const paddingLeft = parseFloat(stickyStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(stickyStyle.paddingRight) || 0;

      // Calculate visible area
      const visibleWidth = stickyWidth - paddingLeft - paddingRight;

      // Get actual card width from DOM
      const cardWidth = firstCard.offsetWidth;

      // Fixed gap of 40px for all screen sizes
      const gap = 40;

      // Calculate total width of all cards + gaps
      const totalCardsWidth = services.length * cardWidth;
      const totalGapsWidth = (services.length - 1) * gap;
      const trackWidth = totalCardsWidth + totalGapsWidth;

      // Distance to scroll = track width - visible area (but not negative)
      const distance = Math.max(0, trackWidth - visibleWidth);

      setScrollDistance(distance);
    };

    // Calculate on mount and when window resizes
    calculateScrollDistance();

    // Use setTimeout to recalculate after layout is complete
    const timeoutId = setTimeout(calculateScrollDistance, 100);

    window.addEventListener("resize", calculateScrollDistance);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", calculateScrollDistance);
    };
  }, [services.length]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <div className="relative w-full bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Intro Section */}
      <section className="flex flex-col justify-end items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold tracking-[0.2em] text-secondary our-services-title-margin"
            style={{ marginTop: "50px" }}
          >
            Our Services
          </h2>
        </motion.div>
      </section>

      {/* Scroll Container - Creates vertical scroll space */}
      <div ref={containerRef} className="relative" style={{ height: "220vh" }}>
        {/* Sticky Wrapper - Stays in viewport while scrolling */}
        <div
          className="sticky our-services-sticky flex items-center overflow-hidden"
          ref={stickyRef}
          style={{
            justifyContent: "flex-start",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          {/* Horizontal Gallery - Moves based on scroll */}
          <motion.div
            className="flex will-change-transform"
            style={{ x, gap: "40px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="shrink-0 group w-[85vw] sm:w-[75vw] md:w-[60vw] lg:w-[45vw] xl:w-170 h-125 sm:h-137.5 md:h-150 lg:h-162.5 xl:h-175"
                ref={service.id === 1 ? firstCardRef : null}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative bg-white  overflow-hidden flex flex-col h-full border border-gray-200/50 transition-all duration-300 hover:shadow-xl">
                  {/* Video Container */}
                  <div className="relative overflow-hidden bg-gray-900 h-75 sm:h-87.5 md:h-95 lg:h-105 xl:h-112.5">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 "
                    >
                      <source src={service.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div
                    className="relative z-10 bg-white flex flex-col h-50 sm:h-50 md:h-55 lg:h-57.5 xl:h-62.5"
                    style={{ padding: "28px 24px" }}
                  >
                    <h3
                      className="text-xl md:text-2xl font-bold text-secondary transition-colors duration-300 shrink-0"
                      style={{ marginBottom: "12px" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-black/70 text-sm md:text-base leading-relaxed line-clamp-4 overflow-hidden">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Outro Section */}
      {/* <section
        className="flex justify-center items-center"
        style={{ height: "100vh" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-5xl md:text-7xl font-bold text-black/80">
            Ready to Transform Your Space?
          </p>
          <button
            className="bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-700 transition-colors duration-300"
            style={{ marginTop: "32px", padding: "16px 48px" }}
          >
            Book Consultation
          </button>
        </motion.div>
      </section> */}
    </div>
  );
};

export default OurServicesSection;
