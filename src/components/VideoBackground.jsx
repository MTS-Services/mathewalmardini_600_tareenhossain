import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoControls from "./VideoControls";

const VideoBackground = ({ isDesktop = true }) => {
  const { scrollY } = useScroll();
  const videoRef = useRef(null);

  // Transform scroll values to match the center bottom image (w-92 h-64 = 368px × 256px)
  // Scale and position to fit perfectly in the bottom center slot
  const scale = useTransform(scrollY, [0, 800], [1, 0.23]);
  const y = useTransform(scrollY, [0, 800], [0, 320]); // Position to bottom center
  // Keep same border radius in both states
  const borderRadius = useTransform(scrollY, [0, 800], [48, 48]);

  if (!isDesktop) {
    return (
      <div className="relative w-full min-h-screen bg-linear-to-r from-[#2D6B7A]/80 via-[#2D6B7A]/40 to-[#2D6B7A]/20">
        <div className="relative w-full h-full" style={{ padding: "8px" }}>
          <div className="relative w-full min-h-screen overflow-hidden rounded-2xl">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ minHeight: "100vh" }}
            >
              <source src="/banner_video/charteris_MP4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            <VideoControls
              className="absolute bottom-4 right-4 z-10"
              videoRef={videoRef}
              isDesktop={isDesktop}
            />
          </div>
        </div>
      </div>
    );
  }

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
            <source src="/banner_video/charteris_MP4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <VideoControls
            className="absolute bottom-12 right-12 z-10"
            videoRef={videoRef}
            isDesktop={isDesktop}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default VideoBackground;
