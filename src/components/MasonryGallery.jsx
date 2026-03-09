import { motion } from "motion/react";
import { useState } from "react";

const MasonryGallery = ({ images, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Helper function to get column class based on number of images
  const getColumnsClass = () => {
    const count = images.length;
    if (count <= 6) return "columns-2";
    if (count <= 12) return "columns-3";
    return "columns-4";
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Mobile Masonry (2 columns - fills gaps automatically) */}
      <style>{`
        .mobile-masonry {
          column-count: 2;
          column-gap: 12px;
        }
        .mobile-masonry-item {
          break-inside: avoid;
          margin-bottom: 12px;
        }
        @media (min-width: 768px) {
          .mobile-masonry {
            display: none;
          }
        }
      `}</style>
      
      <div className="mobile-masonry lg:hidden">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="mobile-masonry-item cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loadedImages[image.id] ? 1 : 0, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => onImageClick(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={`Portfolio ${image.category} ${image.id}`}
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: index === images.length - 1 ? "400px" : "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                className="transform group-hover:scale-105 transition-transform duration-500"
                onLoad={() => handleImageLoad(image.id)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Masonry */}
      <div className={`hidden lg:block ${getColumnsClass()} gap-4 space-y-4`}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="break-inside-avoid mb-4 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loadedImages[image.id] ? 1 : 0, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => onImageClick(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={`Portfolio ${image.category} ${image.id}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                onLoad={() => handleImageLoad(image.id)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
