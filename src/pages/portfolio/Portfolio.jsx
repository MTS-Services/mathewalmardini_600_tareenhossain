import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MasonryGallery from "../../components/MasonryGallery";
import Lightbox from "../../components/Lightbox";
import { getAllImages } from "../../data/portfolioData";

function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = getAllImages();

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2D6B7A] to-[#1e5562] h-[50vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white py-6 px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Explore our complete collection of renovation projects
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-8 px-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              All Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Browse through our diverse portfolio of bathroom, kitchen, and
              laundry renovations. Click on any image to view it in full size.
            </p>
          </motion.div>

          <MasonryGallery images={images} onImageClick={handleImageClick} />
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={images}
            currentIndex={currentImageIndex}
            onClose={handleCloseLightbox}
          />
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can transform your space into something
              extraordinary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:0432661176"
                className="inline-flex items-center gap-3 bg-[#2D6B7A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1e5562] transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(45, 107, 122, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.902 1.007c.5 1.563 2.334 3.75 3.9 4.85l1.007-1.902a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.693C7.258 17.8 2.5 12.442 2.5 6.5V3z" />
                </svg>
                CALL US: 0432661176
              </motion.a>
              <motion.button
                className="bg-white border-2 border-[#2D6B7A] text-[#2D6B7A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2D6B7A] hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book A Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
