// import React, { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";
// import VideoControls from "./VideoControls";

// const VideoBackground = ({ isDesktop = true, position = "fixed" }) => {
//   const { scrollY } = useScroll();
//   const videoRef = useRef(null);

//   // Transform scroll values to match the center bottom image (w-92 h-64 = 368px × 256px)
//   // Scale and position to fit perfectly in the bottom center slot
//   const scale = useTransform(scrollY, [0, 800], [1, 0.23]);
//   const y = useTransform(scrollY, [0, 800], [0, 290]); // Position to bottom center
//   // Fade out video at the end of scroll section - completes before spacer ends
//   // Fade out later so the banner stays visible under InfoSection
//   const opacity = useTransform(scrollY, [0, 1900, 2400], [1, 1, 0]);
//   // Keep same border radius in both states
//   const borderRadius = useTransform(scrollY, [0, 800], [48, 48]);

//   if (!isDesktop) {
//     return (
//       <div className="relative w-full min-h-screen bg-linear-to-r from-[#2D6B7A]/80 via-[#2D6B7A]/40 to-[#2D6B7A]/20">
//         <div className="relative w-full h-full" style={{ padding: "8px" }}>
//           <div className="relative w-full min-h-screen overflow-hidden rounded-2xl">
//             <video
//               ref={videoRef}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//               style={{ minHeight: "100vh" }}
//             >
//               <source src="/banner_video/charteris_MP4.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             <div className="absolute inset-0 bg-black/20 pointer-events-none" />

//             <VideoControls
//               className="absolute bottom-4 right-4 z-10"
//               videoRef={videoRef}
//               isDesktop={isDesktop}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const containerClassName =
//     position === "absolute" ? "absolute inset-0" : "fixed top-0 left-0";

//   return (
//     <>
//       <motion.div
//         className={`${containerClassName} w-full h-screen z-100 flex items-center justify-center pointer-events-none`}
//         initial={{ opacity: 1 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         style={{ opacity }}
//       >
//         <motion.div
//           className="relative w-full h-full overflow-hidden"
//           style={{
//             scale,
//             y,
//             borderRadius,
//             transformOrigin: "center center",
//           }}
//         >
//           {/* Local Video */}
//           <video
//             ref={videoRef}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//             style={{
//               padding: "20px",
//               boxSizing: "border-box",
//               borderRadius: "inherit",
//             }}
//           >
//             <source src="/banner_video/charteris_MP4.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <VideoControls
//             className="absolute bottom-12 right-12 z-10"
//             videoRef={videoRef}
//             isDesktop={isDesktop}
//           />
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// export default VideoBackground;

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoControls from "./VideoControls";

const VideoBackground = ({ isDesktop = true, position = "fixed" }) => {
  const { scrollY } = useScroll();
  const videoRef = useRef(null);

  // ✅ শুধু scale করা হচ্ছে — কোনো y pixel নেই
  // transformOrigin: "center bottom" মানে ভিডিও নিচে-মাঝে anchor হয়ে সংকুচিত হবে
  // এটা সব স্ক্রিন সাইজে automatically কাজ করবে
  const scale = useTransform(scrollY, [0, 800], [1, 0.23]);

  // Video position - moves up slightly to stop higher
  const y = useTransform(scrollY, [0, 3000], [0, -80]);

  // ভিডিও fade out — banner শেষ হওয়ার আগে
  const opacity = useTransform(scrollY, [0, 1900, 2400], [1, 1, 0]);

  // border radius স্থির থাকবে
  const borderRadius = useTransform(scrollY, [0, 800], [48, 48]);

  // ✅ মোবাইল / নন-ডেস্কটপ ভার্শন — কোনো scroll animation নেই
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

  // ✅ Desktop ভার্শন
  // position prop থেকে container class ঠিক হয়
  // কিন্তু ভেতরে সবসময় absolute ব্যবহার হবে — fixed না
  return (
    <motion.div
      // absolute inset-0 → parent sticky container-এর মধ্যে থাকবে
      // fixed ব্যবহার করলে viewport-relative হয়ে বিভিন্ন স্ক্রিনে ভাঙবে
      className="absolute inset-0 w-full h-full z-20 flex items-end justify-center pointer-events-none"
      style={{ opacity }}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{
          scale,
          y,
          borderRadius,
          // ✅ এটাই মূল সমাধান:
          // "center bottom" মানে ভিডিও নিচের মাঝখান থেকে scale হবে
          // pixel-based y transform লাগবে না, সব screen size-এ কাজ করবে
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
