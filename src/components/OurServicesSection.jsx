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
        "Transform your bathroom into a luxurious spa-like retreat with modern fixtures, elegant tiles, and expert craftsmanship.",
      video: "/banner_video/isometric-bathroom-2026-01-28-03-56-56-ut.mp4",
    },
    {
      id: 2,
      title: "Kitchen Renovation",
      description:
        "Create the kitchen of your dreams with custom cabinetry, premium countertops, and smart layouts designed for your lifestyle.",
      video: "/Home_videos/isometric-kitchen-4k-2026-01-28-02-33-39-utc.mp4",
    },
    {
      id: 3,
      title: "Laundry Renovation",
      description:
        "Maximize efficiency and style in your laundry space with organized storage, modern appliances, and practical design solutions.",
      video: "/banner_video/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc.mov",
    },
    {
      id: 4,
      title: "Design Service",
      description:
        "Comprehensive design consultation bringing your vision to life with 3D renderings, material selection, and complete planning.",
      video: "/Home_videos/3d-minimalist-modern-house-building-animation-2026-01-28-05-07-41-utc.mp4",
    },
  ];

  // Scroll-driven animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Responsive distance so the last card ends exactly at the edge
  const [layout, setLayout] = useState({ distance: 0, gap: 40 });

  useEffect(() => {
    const calculateDistance = () => {
      const width = typeof window !== "undefined" ? window.innerWidth : 1440;

      // Breakpoints: mobile < 640, tablet < 1024, laptop/desktop >= 1024
      const settings =
        width < 640
          ? { itemWidth: 320, gap: 20 }
          : width < 1024
            ? { itemWidth: 480, gap: 28 }
            : { itemWidth: 620, gap: 40 };

      const cardWidth = firstCardRef.current?.getBoundingClientRect().width || settings.itemWidth;
      const stickyWidth = stickyRef.current?.getBoundingClientRect().width || width;
      const stickyStyle = stickyRef.current ? getComputedStyle(stickyRef.current) : null;
      const paddingLeft = stickyStyle ? parseFloat(stickyStyle.paddingLeft) || 0 : 0;
      const paddingRight = stickyStyle ? parseFloat(stickyStyle.paddingRight) || 0 : 0;
      const visibleWidth = stickyWidth - paddingLeft - paddingRight;

      const trackWidth = services.length * cardWidth + (services.length - 1) * settings.gap;
      const distance = Math.max(0, trackWidth - visibleWidth);

      setLayout({ distance, gap: settings.gap });
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, [services.length]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -layout.distance]);

  return (
    <div className="relative w-full bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Intro Section */}
      <section
        className="flex flex-col justify-end items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold tracking-[0.2em] text-secondary" style={{marginTop: "50px"}}>
            Our Services
          </h2>
        </motion.div>
      </section>

      {/* Scroll Container - Creates vertical scroll space */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: "220vh" }}
      >
        {/* Sticky Wrapper - Stays in viewport while scrolling */}
        <div
          className="sticky top-0 flex items-center overflow-hidden"
          ref={stickyRef}
          style={{ height: "100vh", justifyContent: "flex-start", paddingLeft: "clamp(16px, 5vw, 64px)" }}
        >
          {/* Horizontal Gallery - Moves based on scroll */}
          <motion.div
            className="flex will-change-transform"
            style={{ x, gap: `${layout.gap}px` }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="shrink-0 group"
                ref={service.id === 1 ? firstCardRef : null}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "clamp(280px, 90vw, 680px)",
                  height: "clamp(420px, 72vh, 750px)",
                }}
              >
                <div
                  className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:border-green-500/40"
                >
                  {/* Video Container */}
                  <div
                    className="relative overflow-hidden bg-gray-900"
                    style={{ flex: "1 1 60%", minHeight: "0" }}
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    >
                      <source src={service.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div
                    className="relative z-10 bg-white flex flex-col"
                    style={{ padding: "28px 24px" }}
                  >
                    <h3
                      className="text-2xl md:text-3xl font-bold text-black group-hover:text-green-600 transition-colors duration-300"
                      style={{ marginBottom: "12px" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-black/70 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <button
                      className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm md:text-base transition-all duration-300 hover:gap-3 hover:text-green-700"
                      style={{ marginTop: "16px" }}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
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
