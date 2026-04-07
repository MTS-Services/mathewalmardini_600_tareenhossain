import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { Phone } from "lucide-react";
import { useRef, useState } from "react";
import CTASection from "../homePage/components/CTASection";
import MasonryGallery from "../../components/MasonryGallery";
import Lightbox from "../../components/Lightbox";
import { getImagesByCategory } from "../../data/portfolioData";
import usePageMeta from "../../hooks/usePageMeta";

function LaundryPortfolio() {
  usePageMeta(
    "Laundry Renovation Portfolio Melbourne",
    "Laundry renovation portfolio Melbourne with smart layouts, storage solutions and completed laundry upgrade projects."
  );
  const videoRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const laundryImages = getImagesByCategory("laundry");

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Video */}
      <section className="relative min-h-dvh md:h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              // src="/banner_video/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc.mov"
              src="https://dc3v08iv2c2ou.cloudfront.net/banner_video/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Laundry Portfolio
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Explore our collection of stunning laundry transformations
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-8 px-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Laundry Renovation Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our stunning laundry transformations. Click on any image
              to view it in full size.
            </p>
          </motion.div>

          <MasonryGallery
            images={laundryImages}
            onImageClick={handleImageClick}
          />

          {/* Call Us Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 md:mt-16 flex justify-center px-4"
          >
            <motion.a
              href="tel:+61432661176"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(45, 107, 122, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-colors duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              CALL US: 0432661176
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={laundryImages}
            currentIndex={currentImageIndex}
            onClose={handleCloseLightbox}
          />
        )}
      </AnimatePresence>

      <CTASection
        heading="Ready to Start Your Project?"
        description="Let's bring your vision to life with our expert craftsmanship and personalized service."
      />
    </div>
  );
}

export default LaundryPortfolio;
