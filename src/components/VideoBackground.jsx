import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoControls from "./VideoControls";

const VideoBackground = () => {
  const { scrollY } = useScroll();
  const videoRef = useRef(null);

  // Transform scroll values to match the center bottom image (w-92 h-64 = 368px × 256px)
  // Scale and position to fit perfectly in the bottom center slot
  const scale = useTransform(scrollY, [0, 800], [1, 0.23]);
  const y = useTransform(scrollY, [0, 800], [0, 320]); // Position to bottom center
  // Keep same border radius in both states
  const borderRadius = useTransform(scrollY, [0, 800], [48, 48]); // 48px in both states

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-100 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-full h-full overflow-hidden"
          style={{
            scale,
            y,
            borderRadius,
            transformOrigin: "center center",
          }}
        >
          {/* Local Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              padding: "20px",
              boxSizing: "border-box",
              borderRadius: "inherit",
            }}
          >
            <source
              src="/banner_video/YTDown.com_YouTube_Corporate-videos-are-boring-We-re-Umault_Media_VCPGMjCW0is_001_1080p.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black/20 pointer-events-none"
            style={{ margin: "20px", borderRadius: "inherit" }}
          />

          <VideoControls
            className="absolute bottom-12 right-12 z-10"
            videoRef={videoRef}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default VideoBackground;
