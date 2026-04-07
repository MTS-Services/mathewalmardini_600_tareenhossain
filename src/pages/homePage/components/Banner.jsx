import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoBackground from "./VideoBackground";
import HeroText from "./HeroText";

const Banner = ({ isDesktop = true }) => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll();
  // White overlay fades out as video shrinks — hides images while video is large
  const whiteOverlayOpacity = useTransform(scrollY, [400, 750], [1, 0]);

  const getVideoPosterUrl = (url) => {
    if (!url.includes("/video/upload/")) {
      return url;
    }

    return url
      .replace("/video/upload/", "/video/upload/so_0/")
      .replace(/\.mp4($|\?)/, ".jpg$1");
  };

  const portfolioImages = [
    // Top Row
    {
      id: 1,
      // url: "/banner_image/Photo5.JPG",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo5.JPG",
      position: "lg:top-22 xl:top-34 2xl:top-34 3xl:top-20 4xl:top-24 left-0",
      size: "lg:w-20 lg:h-32 xl:w-32 xl:h-44 2xl:w-52 2xl:h-48 3xl:w-52 3xl:h-55 4xl:w-58 4xl:h-55 5xl:w-65 5xl:h-64",
    },
    {
      id: 2,
      // url: "/banner_video/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc.mov",
      url: "https://dc3v08iv2c2ou.cloudfront.net/banner_video/3d-rendering-laundry-room-on-ground-floor-washing-2025-12-17-11-02-47-utc.mov",
      type: "video",
      position:
        "lg:top-30 xl:top-38 2xl:top-42 3xl:top-28 4xl:top-32 5xl:top-35 lg:left-28 xl:left-44 2xl:left-80 3xl:left-70 4xl:left-75 5xl:left-90",
      size: "lg:w-48 lg:h-32 xl:w-80 xl:h-48 2xl:w-96 2xl:h-54 3xl:w-96 3xl:h-58 4xl:w-110 4xl:h-64 5xl:w-125 5xl:h-72",
    },
    {
      id: 3,
      // url: "/banner_image/Photo4.JPG",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo4.JPG",
      position:
        "lg:top-18 xl:top-34 2xl:top-35 3xl:top-20 4xl:top-24 left-1/2 -translate-x-1/2",
      size: "lg:w-64 lg:h-36 xl:w-80 xl:h-48 2xl:w-96 2xl:h-54 3xl:w-96 3xl:h-58 4xl:w-110 4xl:h-64 5xl:w-125 5xl:h-72",
    },
    {
      id: 4,
      // url: "/banner_video/beautiful-modern-bathroom-bathtub-washbasin-sa-2026-01-28-02-42-23-utc_(1).mp4",
      url: "https://dc3v08iv2c2ou.cloudfront.net/banner_video/beautiful-modern-bathroom-bathtub-washbasin-sa-2026-01-28-02-42-23-utc_(1).mp4",
      type: "video",
      position:
        "lg:top-30 xl:top-38 2xl:top-42 3xl:top-28 4xl:top-32 5xl:top-35 lg:right-28 xl:right-44 2xl:right-72 3xl:right-70 4xl:right-75 5xl:right-90",
      size: "lg:w-48 lg:h-32 xl:w-80 xl:h-48 2xl:w-96 2xl:h-54 3xl:w-96 3xl:h-58 4xl:w-110 4xl:h-64 5xl:w-125 5xl:h-72",
    },
    {
      id: 5,
      // url: "/banner_image/Photo1.png",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo1.png",
      position: "lg:top-22 xl:top-34 2xl:top-30 3xl:top-20 4xl:top-24 right-0",
      size: "lg:w-20 lg:h-32 xl:w-32 xl:h-44 2xl:w-52 2xl:h-48 3xl:w-52 3xl:h-55 4xl:w-58 4xl:h-55 5xl:w-65 5xl:h-64",
    },
    // Bottom Row
    {
      id: 6,
      // url: "/banner_image/Photo7.png",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo7.png",
      position:
        "lg:bottom-22 xl:bottom-18 2xl:bottom-10 3xl:bottom-8 4xl:bottom-20 left-0",
      size: "lg:w-20 lg:h-32 xl:w-32 xl:h-44 2xl:w-52 2xl:h-48 3xl:w-52 3xl:h-55 4xl:w-58 4xl:h-55 5xl:w-65 5xl:h-64",
    },
    {
      id: 7,
      // url: "/banner_image/Photo6.jpg",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo6.jpg",
      position:
        "lg:bottom-28 xl:bottom-24 2xl:bottom-22 3xl:bottom-18 4xl:bottom-32 lg:left-28 xl:left-44 2xl:left-70 3xl:left-70 4xl:left-75 5xl:left-90",
      size: "lg:w-48 lg:h-32 xl:w-80 xl:h-48 2xl:w-96 2xl:h-54 3xl:w-96 3xl:h-58 4xl:w-110 4xl:h-64 5xl:w-125 5xl:h-72",
    },
    {
      id: 9,
      // url: "/banner_image/Photo3.JPG",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo3.JPG",
      position:
        "lg:bottom-28 xl:bottom-24 2xl:bottom-22 3xl:bottom-18 4xl:bottom-32 lg:right-28 xl:right-44 2xl:right-72 3xl:right-70 4xl:right-75 5xl:right-90",
      size: "lg:w-48 lg:h-32 xl:w-80 xl:h-48 2xl:w-96 2xl:h-54 3xl:w-96 3xl:h-58 4xl:w-110 4xl:h-64 5xl:w-125 5xl:h-72",
    },
    {
      id: 10,
      // url: "/banner_image/Photo2.png",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo2.png",
      position:
        "lg:bottom-22 xl:bottom-18 2xl:bottom-10 3xl:bottom-8 4xl:bottom-20 right-0",
      size: "lg:w-20 lg:h-32 xl:w-32 xl:h-44 2xl:w-52 2xl:h-48 3xl:w-52 3xl:h-55 4xl:w-58 4xl:h-55 5xl:w-65 5xl:h-64",
    },
  ];

  const mobileImages = [
    {
      id: 1,
      url: portfolioImages[0].url,
      position: "top-14 left-0",
      size: "w-22 h-28 md:w-20 md:h-32 lg:w-48 lg:h-40",
      radius: "rounded-r-lg",
    },
    {
      id: 2,
      // url: "/banner_image/Photo2.png",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo2.png",
      position: "top-8 left-1/2 -translate-x-1/2",
      size: "w-46 h-28 md:w-20 md:h-32 lg:w-68 lg:h-40",
      radius: "rounded-lg",
    },
    {
      id: 3,
      url: portfolioImages[2].url,
      position: "top-15 right-0",
      size: "w-22 h-28 md:w-20 md:h-32 lg:w-48 lg:h-40",
      radius: "rounded-lg",
    },
    {
      id: 4,
      url: portfolioImages[6].url,
      position: "bottom-14 left-0",
      size: "w-22 h-28 md:w-20 md:h-32 lg:w-48 lg:h-40",
      radius: "rounded-r-lg",
    },
    {
      id: 5,
      // url: "/banner_image/Photo3.JPG",
      url: "https://dc3v08iv2c2ou.cloudfront.net/about/banner_image/Photo3.JPG",
      position: "bottom-8 right-1/2 translate-x-1/2",
      size: "w-46 h-28 md:w-20 md:h-32 lg:w-68 lg:h-40",
      radius: "rounded-lg",
    },
    {
      id: 6,
      url: portfolioImages[8].url,
      position: "bottom-15 right-0",
      size: "w-22 h-28 md:w-20 md:h-32 lg:w-48 lg:h-40",
      radius: "rounded-lg",
    },
  ];

  const tabletImages = [
    {
      id: 1,
      url: portfolioImages[0].url,
      position: "top-16 left-0",
      size: "w-40 h-44",
      radius: "rounded-r-lg",
    },
    {
      id: 2,
      url: portfolioImages[3].url,
      position: "top-8 left-1/2 -translate-x-1/2",
      size: "w-80 h-50",
      radius: "rounded-lg",
    },
    {
      id: 3,
      url: portfolioImages[2].url,
      position: "top-16 right-0",
      size: "w-40 h-44",
      radius: "rounded-l-lg",
    },
    {
      id: 4,
      url: portfolioImages[6].url,
      position: "bottom-16 left-0",
      size: "w-40 h-44",
      radius: "rounded-r-lg",
    },
    {
      id: 5,
      url: portfolioImages[7].url,
      position: "bottom-4 right-1/2 translate-x-1/2",
      size: "w-80 h-50",
      radius: "rounded-lg",
    },
    {
      id: 6,
      url: portfolioImages[8].url,
      position: "bottom-16 right-0",
      size: "w-40 h-44",
      radius: "rounded-l-lg",
    },
  ];

  if (!isDesktop) {
    const imagesToUse = isMobile
      ? mobileImages
      : isTablet
        ? tabletImages
        : mobileImages;

    return (
      <section className="relative py-8 md:py-16">
        <div className="absolute inset-0" />
        <div className="relative mx-auto px-4 md:px-6">
          {imagesToUse.map((image) => {
            const portfolioItem = portfolioImages.find(
              (p) => p.url === image.url,
            );
            return (
              <div
                key={image.id}
                className={`absolute ${image.position} ${image.size} ${image.radius} overflow-hidden shadow-lg`}
              >
                {portfolioItem?.type === "video" ? (
                  <img
                    src={getVideoPosterUrl(image.url)}
                    alt={`Portfolio ${image.id}`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <img
                    src={image.url}
                    alt={`Portfolio ${image.id}`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
            );
          })}

          <div className="relative flex items-center justify-center min-h-[95vh] md:min-h-[70vh]">
            <div className="text-center px-2">
              <h2 className="text-2xl font-bold text-gray-900 text-center px-2 md:px-0">
                Perfect Solution For Your Renovation
              </h2>
              <p className="text-lg text-gray-900 mb-6 mx-auto max-w-2xl">
                Bespoke delivers an end to end renovation experience for mid to
                high end projects. Your renovation will be overseen and
                completed by a registered builder, providing you with confidence
                in the quality of workmanship and adherence to the highest
                professional Australian standards from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    // ✅ min-h-[250vh] → sticky container's scroll range
    <section className="relative min-h-[250vh]">
      {/*
        ✅ sticky top-0 → this div will stick to the screen
        VideoBackground uses position: absolute internally
        So this sticky div is the reference point — not the viewport
        This will work the same way on all screen sizes
      */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* White overlay — hides background images while video is large */}
        <motion.div
          className="absolute inset-0 bg-white z-15 pointer-events-none"
          style={{ opacity: whiteOverlayOpacity }}
        />

        {/* Portfolio Images Grid */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="relative h-full mx-auto px-2 md:px-4 flex items-center">
            {portfolioImages.map((image) => (
              <div
                key={image.id}
                className={`absolute ${image.position} ${image.size}`}
              >
                <div className="relative w-full h-full group cursor-pointer">
                  {image.type === "video" ? (
                    <video
                      src={image.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={getVideoPosterUrl(image.url)}
                      className={`w-full h-full object-cover object-center shadow-xl ${
                        image.id === 1 || image.id === 6
                          ? "rounded-r-lg"
                          : image.id === 5 || image.id === 10
                            ? "rounded-l-lg"
                            : "rounded-lg"
                      }`}
                    />
                  ) : (
                    <img
                      src={image.url}
                      alt={`Portfolio ${image.id}`}
                      className={`w-full h-full object-cover object-center shadow-xl ${
                        image.id === 1 || image.id === 6
                          ? "rounded-r-lg"
                          : image.id === 5 || image.id === 10
                            ? "rounded-l-lg"
                            : "rounded-lg"
                      }`}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div
                    className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ${
                      image.id === 1 || image.id === 6
                        ? "rounded-r-lg"
                        : image.id === 5 || image.id === 10
                          ? "rounded-l-lg"
                          : "rounded-lg"
                    }`}
                  />
                </div>
              </div>
            ))}

            {/* Center Text */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center px-2 md:px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[56px] font-semibold text-gray-900 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-400 mx-auto">
                  Perfect Solution For Your Renovation
                </h2>
                <p className="max-w-5xl text-[20px] text-black/90 mb-6 mx-auto">
                  Bespoke delivers an end to end renovation experience for mid
                  to high end projects. Your renovation will be overseen and
                  completed by a registered builder, providing you with
                  confidence in the quality of workmanship and adherence to the
                  highest professional Australian standards from start to
                  finish.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ position="absolute" is passed — VideoBackground won't use fixed internally */}
        <VideoBackground isDesktop={isDesktop} position="absolute" />
        <HeroText isDesktop={isDesktop} position="absolute" />
      </div>
    </section>
  );
};

export default Banner;
