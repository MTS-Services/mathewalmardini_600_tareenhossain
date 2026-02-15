import { useState, useEffect } from "react";
import { motion } from "motion/react";

const images = [
  {
    id: 1,
    src: "/PhotoGallery/Before and after 1.jpg",
    title: "Before & After",
  },
  { id: 2, src: "/PhotoGallery/IMG_1490.JPG", title: "Modern Design" },
  { id: 3, src: "/PhotoGallery/IMG_1528.JPG", title: "Premium Finish" },
  { id: 4, src: "/PhotoGallery/IMG_4787.PNG", title: "Luxury Space" },
  { id: 5, src: "/PhotoGallery/IMG_4788.PNG", title: "Crafted Excellence" },
];

const PhotoGallery = () => {
  const [expandedId, setExpandedId] = useState(1);
  const [imageCount, setImageCount] = useState(5);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);

      if (width >= 1024 && width <= 1439) {
        setImageCount(4);
      } else if (width >= 1024) {
        setImageCount(5);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const displayedImages = images.slice(0, imageCount);

  return (
    <div
      className="bg-black"
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      {/* Section Title */}
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
          Gallery of Our Craftsmanship
        </h2>
      </div>

      {/* Mobile/Tablet Grid Layout */}
      {isMobile && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "0.75rem",
            padding: "0 1rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {/* 1st image - Left column, top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              gridColumn: "1",
              gridRow: "1",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "1/1",
            }}
          >
            <img
              src={images[0].src}
              alt={images[0].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "0.5rem",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                color: "white",
              }}
            >
              <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                {images[0].title}
              </h3>
            </div>
          </motion.div>

          {/* 2nd image - Right column, top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              gridColumn: "2",
              gridRow: "1",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "1/1",
            }}
          >
            <img
              src={images[1].src}
              alt={images[1].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "0.5rem",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                color: "white",
              }}
            >
              <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                {images[1].title}
              </h3>
            </div>
          </motion.div>

          {/* 3rd image - Left column, bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              gridColumn: "1",
              gridRow: "2",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "1/1",
            }}
          >
            <img
              src={images[2].src}
              alt={images[2].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "0.5rem",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                color: "white",
              }}
            >
              <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                {images[2].title}
              </h3>
            </div>
          </motion.div>

          {/* 4th image - Right column, bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              gridColumn: "2",
              gridRow: "2",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "1/1",
            }}
          >
            <img
              src={images[3].src}
              alt={images[3].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "0.5rem",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                color: "white",
              }}
            >
              <h3 style={{ fontSize: "12px", fontWeight: "bold" }}>
                {images[3].title}
              </h3>
            </div>
          </motion.div>
        </div>
      )}

      {/* Desktop Horizontal Expanding Gallery */}
      {!isMobile && (
        <div
          className="flex items-center justify-center h-[400px] md:h-[500px] overflow-hidden"
          style={{ gap: "1rem", width: "90%", margin: "0 auto" }}
        >
          {displayedImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ borderRadius: 20 }}
              animate={{
                width: expandedId === image.id ? "1000px" : "600px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onHoverStart={() => setExpandedId(image.id)}
              onHoverEnd={() => setExpandedId(1)}
              className="relative h-full cursor-pointer overflow-hidden shadow-xl"
              style={{ borderRadius: "20px" }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Text Overlay (only visible when expanded) */}
              {expandedId === image.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white"
                  style={{ padding: "1.5rem" }}
                >
                  <h3 className="text-lg md:text-xl font-bold">
                    {image.title}
                  </h3>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
