import React from "react";
import { motion } from "motion/react";

const VideoBackground = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen z-100 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* YouTube Video Embed */}
      {/* <iframe
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw]  min-w-[177.77vh] p-6"
        style={{ padding: "30px 400px" }}
        src="https://www.youtube.com/embed/VCPGMjCW0is?autoplay=1&mute=1&loop=1&playlist=VCPGMjCW0is&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      /> */}

      {/* Local Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover px-6 py-8"
        style={{ padding: "15px 15px" }}
      >
        <source
          src="/banner_video/YTDown.com_YouTube_Corporate-videos-are-boring-We-re-Umault_Media_VCPGMjCW0is_001_1080p.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </motion.div>
  );
};

export default VideoBackground;
