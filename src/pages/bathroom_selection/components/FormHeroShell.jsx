import { useEffect, useRef, useState } from "react";
import "../bathroomSelection.css";

const HERO_VIDEO =
  "https://dc3v08iv2c2ou.cloudfront.net/Our_services/modern-bathroom-interior-with-freestanding-tub-and-2025-12-17-15-15-24-utc.mp4.mp4";

const LOOP_LEAD = 0.35;

export default function FormHeroShell({ children }) {
  const videoARef = useRef(null);
  const videoBRef = useRef(null);
  const activeRef = useRef("a");
  const swappingRef = useRef(false);
  const [videoReady, setVideoReady] = useState(false);
  const [activeLayer, setActiveLayer] = useState("a");

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("bsf-lock");
    return () => html.classList.remove("bsf-lock");
  }, []);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    const setupVideo = (video) => {
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.src = HERO_VIDEO;
      video.load();
    };

    setupVideo(videoA);
    setupVideo(videoB);

    const getPair = () =>
      activeRef.current === "a"
        ? { active: videoA, inactive: videoB, next: "b" }
        : { active: videoB, inactive: videoA, next: "a" };

    const swapLayers = async () => {
      if (swappingRef.current) return;

      const { active, inactive, next } = getPair();
      if (!active.duration || Number.isNaN(active.duration)) return;
      if (active.currentTime < active.duration - LOOP_LEAD) return;

      swappingRef.current = true;

      inactive.currentTime = 0;
      try {
        await inactive.play();
      } catch {
        swappingRef.current = false;
        return;
      }

      activeRef.current = next;
      setActiveLayer(next);

      window.setTimeout(() => {
        active.pause();
        active.currentTime = 0;
        swappingRef.current = false;
      }, 80);
    };

    const onTimeUpdate = () => {
      swapLayers();
    };

    videoA.addEventListener("timeupdate", onTimeUpdate);
    videoB.addEventListener("timeupdate", onTimeUpdate);

    const start = async () => {
      videoA.currentTime = 0;
      try {
        await videoA.play();
        setVideoReady(true);
      } catch {
        setVideoReady(false);
      }
    };

    start();

    return () => {
      videoA.removeEventListener("timeupdate", onTimeUpdate);
      videoB.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  const videoClass = (layer) =>
    `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
      videoReady && activeLayer === layer
        ? "opacity-100 z-[2]"
        : "opacity-0 z-[1] pointer-events-none"
    }`;

  return (
    <div className="bsf-page relative h-dvh w-full overflow-hidden bg-[#eae3d7]">
      <div className="bsf-shell relative z-10 box-border h-full w-full p-3 sm:p-4 lg:p-5 xl:p-6">
        <div className="bsf-hero relative h-full w-full overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]">
          <div className="absolute inset-0 bg-[#1a3f4a]/20">
            <video
              ref={videoARef}
              muted
              playsInline
              preload="auto"
              className={videoClass("a")}
            />
            <video
              ref={videoBRef}
              muted
              playsInline
              preload="auto"
              className={videoClass("b")}
            />
          </div>

          <div className="relative z-10 flex h-full min-h-0 flex-col overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
