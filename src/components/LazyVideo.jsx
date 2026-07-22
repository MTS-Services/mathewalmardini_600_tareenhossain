import { useEffect, useRef, useState } from "react";

/**
 * Loads and plays a video only when it enters (or is near) the viewport.
 * Keeps bandwidth free for LCP and above-the-fold content.
 */
function LazyVideo({
  src,
  poster,
  className = "",
  style,
  rootMargin = "200px",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...rest
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video || !autoPlay) return;

    const play = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("canplay", play, { once: true });
      return () => video.removeEventListener("canplay", play);
    }
  }, [shouldLoad, autoPlay, src]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className={className}
          style={style}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload="metadata"
          {...rest}
        />
      ) : poster ? (
        <img
          src={poster}
          alt=""
          className={className}
          style={style}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={className} style={{ ...style, backgroundColor: "#1a1a1a" }} />
      )}
    </div>
  );
}

export default LazyVideo;
