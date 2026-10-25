import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoControls from "./VideoControls";

const HERO_VIDEO =
  "https://media.b-spoke.com.au/banner_video/charteris_MP4.mp4?v=2";
const HERO_POSTER =
  "https://media.b-spoke.com.au/form_images/1789534057591-5a01b8d3f3acf766.webp?v=2";

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
  const [isPlaying, setIsPlaying] = useState(false);

  const scale = useTransform(scrollY, [0, 800], [1, 0.22]);
  const y = useTransform(scrollY, [0, 3000], [0, -80]);
  const opacity = useTransform(scrollY, [0, 3100, 3500], [1, 1, 0]);
  const borderRadius = useTransform(scrollY, [0, 800], [48, 48]);

  // Hand off from the HTML LCP shell once this React poster is on screen.
  // Wait until the shell's image has actually painted (max 1.5s): hiding it earlier
  // makes this later React copy the page's LCP. requestAnimationFrame isn't proof of
  // a paint during startup, so use Element Timing where the browser supports it.
  useEffect(() => {
    const shellImg = document.querySelector("#lcp-hero img");
    let rafId;
    let observer;
    let done = false;
    const handOff = () => {
      if (done) return;
      done = true;
      observer?.disconnect();
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(dismissLcpHeroShell);
      });
    };

    if (!shellImg) {
      handOff();
    } else if (PerformanceObserver.supportedEntryTypes?.includes("element")) {
      observer = new PerformanceObserver((list) => {
        if (list.getEntries().some((entry) => entry.identifier === "lcp-hero")) {
          handOff();
        }
      });
      observer.observe({ type: "element", buffered: true });
    } else if (shellImg.complete) {
      handOff();
    } else {
      shellImg.addEventListener("load", handOff, { once: true });
      shellImg.addEventListener("error", handOff, { once: true });
    }
    const timeoutId = window.setTimeout(handOff, 1500);

    return () => {
      observer?.disconnect();
      shellImg?.removeEventListener("load", handOff);
      shellImg?.removeEventListener("error", handOff);
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.getAttribute("src")) {
      video.src = HERO_VIDEO;
      video.preload = "auto";
      video
        .play()
        .then(() => {
          setVideoReady(true);
          setIsPlaying(true);
        })
        .catch(() => setIsPlaying(false));
      return;
    }

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

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
              isPlaying={isPlaying}
              onToggle={togglePlayback}
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
          isPlaying={isPlaying}
          onToggle={togglePlayback}
          isDesktop={isDesktop}
        />
      </motion.div>
    </motion.div>
  );
};

export default VideoBackground;
