import { motion } from "motion/react";
import { useState } from "react";

const MasonryGallery = ({ images, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Adjust columns based on image count for better layout
  const getColumnsClass = () => {
    const count = images.length;
    if (count <= 3) return "lg:columns-2 xl:columns-2";
    if (count <= 6) return "lg:columns-2 xl:columns-3";
    if (count <= 12) return "lg:columns-3 xl:columns-3";
    return "lg:columns-3 xl:columns-4";
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Mobile Grid (2 columns) */}
      <div className="grid grid-cols-2 gap-3 lg:hidden">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="cursor-pointer group"
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
