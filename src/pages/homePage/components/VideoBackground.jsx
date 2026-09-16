import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoControls from "./VideoControls";

const HERO_VIDEO =
  "https://dc3v08iv2c2ou.cloudfront.net/banner_video/charteris_MP4.mp4";
const HERO_POSTER =
  "https://dc3v08iv2c2ou.cloudfront.net/form_images/1789534057591-5a01b8d3f3acf766.webp";

function dismissLcpHeroShell() {
  const el = document.getElementById("lcp-hero");
  if (!el) return;
  el.classList.add("is-hidden");
  window.setTimeout(() => el.remove(), 220);
}

const VideoBackground = ({ isDesktop = true }) => {
  const { scrollY } = useScroll();
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  const scale = useTransform(scrollY, [0, 800], [1, 0.22]);
  const y = useTransform(scrollY, [0, 3000], [0, -80]);
  const opacity = useTransform(scrollY, [0, 3100, 3500], [1, 1, 0]);
  const borderRadius = useTransform(scrollY, [0, 800], [48, 48]);

  // Hand off from the HTML LCP shell once this React poster is on screen
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(dismissLcpHeroShell);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Defer heavy MP4 until after first paint so LCP can be the poster image
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    let idleId;
    let timeoutId;

    const startVideo = () => {
      if (cancelled || !video) return;
      video.src = HERO_VIDEO;
      video.load();

      const tryPlay = () => {
        if (cancelled) return;
        video
          .play()
          .then(() => setVideoReady(true))
          .catch(() => setVideoReady(true));
      };

      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener("canplay", tryPlay, { once: true });
      }
    };

    if ("requestIdleCallback" in window) {
      idleId = requestIdleCallback(startVideo, { timeout: 1800 });
    } else {
      timeoutId = setTimeout(startVideo, 800);
    }

    return () => {
      cancelled = true;
      if (idleId != null && "cancelIdleCallback" in window) {
        cancelIdleCallback(idleId);
      }
      if (timeoutId != null) clearTimeout(timeoutId);
    };
  }, []);

  const mediaStyle = isDesktop
    ? {
        padding: "20px",
        boxSizing: "border-box",
        borderRadius: "inherit",
      }
    : { minHeight: "100vh" };

  const videoEl = (
    <div className="relative w-full h-full">
      <img
        src={HERO_POSTER}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={mediaStyle}
        fetchPriority="high"
        decoding="async"
      />
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        poster={HERO_POSTER}
        className={`relative w-full h-full object-cover transition-opacity duration-500 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        style={mediaStyle}
      >
        <track kind="captions" srclang="en" label="English" />
      </video>
    </div>
  );

  if (!isDesktop) {
    return (
      <div className="relative w-full min-h-screen">
        <div className="relative w-full h-full" style={{ padding: "8px" }}>
          <div className="relative w-full min-h-screen overflow-hidden rounded-2xl">
            {videoEl}
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
    <motion.div
      className="absolute inset-0 w-full h-full z-20 flex items-end justify-center pointer-events-none"
      style={{ opacity }}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{
          scale,
          y,
          borderRadius,
          transformOrigin: "center bottom",
          willChange: "transform",
        }}
      >
        {videoEl}
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
