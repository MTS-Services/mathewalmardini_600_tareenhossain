import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoControls from "./VideoControls";

const VideoBackground = ({ isDesktop = true, position = "fixed" }) => {
  const { scrollY } = useScroll();
  const videoRef = useRef(null);

  // ✅ Only scale is applied — no y pixel movement
  // transformOrigin: "center bottom" means video will shrink from bottom-center anchor
  // This will work automatically on all screen sizes
  const scale = useTransform(scrollY, [0, 800], [1, 0.23]);

  // Video position - moves up slightly to stop higher
  const y = useTransform(scrollY, [0, 3000], [0, -80]);

  // Video fade out — before banner ends
  // ✅ FIX: Previously [0, 1900, 2400] ended at 2400px, but section continues to 2810px
  // Now [0, 2300, 2750] → matches with section end, no white screen
  const opacity = useTransform(scrollY, [0, 2300, 2750], [1, 1, 0]);

  // Border radius stays constant
  const borderRadius = useTransform(scrollY, [0, 800], [48, 48]);

  // ✅ Mobile / non-desktop version — no scroll animation
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

  // ✅ Desktop version
  // Container class determined from position prop
  // But internally always uses absolute — not fixed
  return (
    <motion.div
      // absolute inset-0 → stays within parent sticky container
      // Using fixed would make it viewport-relative and break on different screens
      className="absolute inset-0 w-full h-full z-20 flex items-end justify-center pointer-events-none"
      style={{ opacity }}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{
          scale,
          y,
          borderRadius,
          // ✅ This is the main solution:
          // "center bottom" means video will scale from bottom-center
          // No need for pixel-based y transform, works on all screen sizes
          transformOrigin: "center bottom",
        }}
      >
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
  );
};

export default VideoBackground;
