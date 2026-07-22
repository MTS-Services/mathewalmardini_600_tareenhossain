import { motion } from "motion/react";
import { useState } from "react";

const INITIAL_VISIBLE = 24;

const MasonryGallery = ({ images, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <style>{`
        .portfolio-masonry {
          column-count: 2;
          column-gap: 12px;
        }
        .portfolio-masonry-item {
          break-inside: avoid;
          margin-bottom: 12px;
        }
        @media (min-width: 768px) {
          .portfolio-masonry {
            column-count: 3;
            column-gap: 16px;
          }
          .portfolio-masonry-item {
            margin-bottom: 16px;
          }
        }
        @media (min-width: 1024px) {
          .portfolio-masonry {
            column-count: ${images.length <= 6 ? 2 : images.length <= 12 ? 3 : 4};
            column-gap: 16px;
          }
        }
      `}</style>

      <div className="portfolio-masonry">
        {visibleImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="portfolio-masonry-item cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loadedImages[image.id] ? 1 : 0.3, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index, 12) * 0.03 }}
            onClick={() => onImageClick(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100">
              <img
                src={image.src}
                alt={`Portfolio ${image.category} ${image.id}`}
                width={600}
                height={800}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                onLoad={() => handleImageLoad(image.id)}
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) =>
                Math.min(count + INITIAL_VISIBLE, images.length),
              )
            }
            className="rounded-lg bg-[#2D6B7A] px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1e5562]"
          >
            Load more ({images.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;
