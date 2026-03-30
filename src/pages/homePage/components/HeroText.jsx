import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";

const HeroText = ({ isDesktop = true, position = "fixed" }) => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Only opacity changes, no movement
  // Fade out earlier to ensure clean transition
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mobile layout (< 768px) - vertical buttons with 80% width
  if (!isDesktop && isMobile) {
    return (
      <div className="absolute inset-0 z-200 flex items-center justify-center pointer-events-none p-4 sm:p-6 md:p-8">
        <div
          className="text-center w-full max-w-5xl"
          style={{ padding: "0 15px" }}
        >
          {/* <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Perfect Solution For Your Renovation
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Bespoke is an end to end service provider that focuses on delivering
            mid to high end renovation projects and our vision is to be the top
            home renovation expert in Melbourne.
          </p> */}
          <img
            // src="/logo.png"
            src="https://dc3v08iv2c2ou.cloudfront.net/logo.png"
            alt="B-spoke"
            width="256"
            height="180"
            style={{ height: "180px", width: "auto", margin: "0 auto" }}
          />
          {/* <div
            className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto"
            style={{ marginTop: "20px" }}
          >
            <a
              href="tel:+61432661176"
              className="bg-[#2D6B7A] text-white rounded-lg font-semibold text-base pointer-events-auto hover:bg-[#2D6B7A]/90 transition-colors flex items-center justify-center"
              style={{ padding: "12px 0", width: "80%" }}
            >
              Call Us
            </a>
            <Link
              to="/book-consultation"
              className="w-full flex justify-center"
            >
              <button
                className="bg-[#2D6B7A] text-white rounded-lg font-semibold text-base pointer-events-auto hover:bg-[#2D6B7A]/90 transition-colors"
                style={{ padding: "12px 0", width: "80%" }}
              >
                Book Consultation
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    );
  }

  // Tablet layout (768px - 1024px) - horizontal buttons like desktop but smaller
  if (!isDesktop) {
    return (
      <div className="absolute inset-0 z-200 flex items-center justify-center pointer-events-none p-4 sm:p-6 md:p-8">
        <div
          className="text-center w-full max-w-5xl"
          style={{ padding: "0 15px" }}
        >
          {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Perfect Solution For Your Renovation
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Bespoke is an end to end service provider that focuses on delivering
            mid to high end renovation projects and our vision is to be the top
            home renovation expert in Melbourne.
          </p> */}
          <img
            // src="/logo.png"
            src="https://dc3v08iv2c2ou.cloudfront.net/logo.png"
            alt="B-spoke"
            width="426"
            height="300"
            style={{ height: "300px", width: "auto", margin: "0 auto" }}
          />
          {/* <div
            className="flex gap-4 justify-center"
            style={{ marginTop: "20px" }}
          >
            <a
              href="tel:+61432661176"
              className="bg-[#2D6B7A] text-white rounded-lg font-semibold text-base pointer-events-auto hover:bg-[#2D6B7A]/90 transition-colors flex items-center justify-center"
              style={{ padding: "12px 24px" }}
            >
              Call Us
            </a>
            <Link to="/book-consultation">
              <button
                className="bg-[#2D6B7A] text-white rounded-lg font-semibold text-base pointer-events-auto hover:bg-[#2D6B7A]/90 transition-colors"
                style={{ padding: "12px 24px" }}
              >
                Book Consultation
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    );
  }

  const containerClassName =
    position === "absolute" ? "absolute inset-0" : "fixed inset-0";

  return (
    <motion.div
      className={`${containerClassName} z-200 flex items-center justify-center pointer-events-none`}
      style={{ opacity }}
    >
      <div className="text-center px-4 max-w-5xl">
        {/* <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Perfect Solution For Your Renovation
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
          Bespoke is an end to end service provider that focuses on delivering
          mid to high end renovation projects and our vision is to be the top
          home renovation expert in Melbourne.
        </p> */}
        <img
          // src="/logo.png"
          src="https://dc3v08iv2c2ou.cloudfront.net/logo.png"
          alt="B-spoke"
          width="568"
          height="400"
          style={{ height: "400px", width: "auto", margin: "0 auto" }}
        />
        {/* <div
          className="flex gap-4 justify-center"
          style={{ marginTop: "0px" }}
        >
          <motion.a
            href="tel:+61432661176"
            className="bg-[#2D6B7A] text-white rounded-lg font-semibold text-lg hover:bg-[#2D6B7A]/90 transition-colors pointer-events-auto cursor-pointer flex items-center justify-center"
            style={{ padding: "10px 30px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </motion.a>
          <Link to="/book-consultation">
            <motion.button
              className="bg-[#2D6B7A] text-white rounded-lg font-semibold text-lg hover:bg-[#2D6B7A]/90 transition-colors pointer-events-auto cursor-pointer"
              style={{ padding: "15px 30px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
};

export default HeroText;
