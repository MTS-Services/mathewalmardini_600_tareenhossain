import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";

const OurServicesSection = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const firstCardRef = useRef(null);

  const getVideoPosterUrl = (url) => {
    if (!url.includes("/video/upload/")) {
      return url;
    }

    return url
      .replace("/video/upload/", "/video/upload/so_0/")
      .replace(/\.mp4($|\?)/, ".jpg$1");
  };

  const services = [
    {
      id: 1,
      title: "Bathroom Renovation",
      description:
        "Transform your bathroom with creative design and functional planning. Our team delivers end-to-end construction services for a beautiful, practical space.",
      // video:
      //   "/Our_services/modern-bathroom-interior-with-freestanding-tub-and-2025-12-17-15-15-24-utc.mp4.mp4",
      video:
        "https://dc3v08iv2c2ou.cloudfront.net/Our_services/modern-bathroom-interior-with-freestanding-tub-and-2025-12-17-15-15-24-utc.mp4.mp4",
      type: "video",
      path: "/bathroom-renovation",
    },
    {
      id: 2,
      title: "Laundry Renovation",
      description:
        "Expert laundry room renovation from planning and design to plumbing installation, ensuring everything is done correctly.",
      // video:
      // "/Our_services/modern-washing-machine-in-a-laundry-room-against-a-2026-01-09-00-42-26-utc.jpg",
      video:
        "https://dc3v08iv2c2ou.cloudfront.net/Our_services/modern-washing-machine-in-a-laundry-room-against-a-2026-01-09-00-42-26-utc.jpg",
      type: "image",
      path: "/laundry-renovation",
    },
    {
      id: 3,
      title: "Kitchen Renovation",
      description:
        "Complete kitchen renovation from design to construction with warranty on labor and materials. Highest quality, transparent process, and excellent results within your budget.",
      // video:
      // "/Our_services/modern-and-spacious-wooden-kitchen-room-2025-12-17-06-34-17-utc.mp4",
      video:
        "https://dc3v08iv2c2ou.cloudfront.net/Our_services/modern-and-spacious-wooden-kitchen-room-2025-12-17-06-34-17-utc.mp4",
      type: "video",
      path: "/kitchen-renovation",
    },
    {
      id: 4,
      title: "Shop Fitouts",
      description:
        "We build retails spaces that are not only visually stunning but also functional and efficient.",
      // video: "/Our_services/envato-labs-image-edit.png",
      video:
        "https://dc3v08iv2c2ou.cloudfront.net/Our_services/envato-labs-image-edit.png",
      type: "image",
      path: "/shop-fitouts",
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
    <div className="relative w-full bg-white our-services-padding-bottom">
      {/* Intro Section */}
      <section className="flex flex-col justify-end items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-bold tracking-[0.2em] text-secondary our-services-title-margin"
            style={{ marginTop: "50px" }}
          >
            Our Services
          </h2>
        </motion.div>
      </section>

      {/* Scroll Container - Creates vertical scroll space */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: "220vh", marginTop: "40px" }}
      >
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
                className="shrink-0 group w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[55vw] xl:w-200 2xl:w-280 h-125 sm:h-137.5 md:h-150 lg:h-162.5 xl:h-195"
                ref={service.id === 1 ? firstCardRef : null}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link to={service.path} className="block h-full">
                  <div className="relative  overflow-hidden flex flex-col h-full our-services-margin-top">
                    {/* Video/Image Container */}
                    <div
                      className="relative bg-gray-900 h-62.5 sm:h-87.5 md:h-95 lg:h-105 xl:h-140 2xl:h-150 rounded-3xl overflow-hidden"
                      style={{ marginTop: "0px" }}
                    >
                      {service.type === "video" ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="none"
                          poster={getVideoPosterUrl(service.video)}
                          className="w-full h-full object-cover transition-transform duration-500"
                        >
                          <source src={service.video} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={service.video}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          loading="lazy"
                        />
                      )}

                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div
                      className="relative z-10 flex flex-col h-50 sm:h-50 md:h-55 lg:h-57.5 xl:h-62.5"
                      style={{ padding: "28px 24px" }}
                    >
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-secondary transition-colors duration-300 shrink-0"
                        style={{ marginBottom: "12px" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-black text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-relaxed line-clamp-4 overflow-hidden">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
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
