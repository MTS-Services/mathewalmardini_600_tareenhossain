import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import VideoBackground from "../components/VideoBackground";
import HeroText from "../components/HeroText";

function Home() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }
    return window.innerWidth >= 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header isDesktop={isDesktop} />
      {isDesktop ? (
        <>
          <VideoBackground isDesktop={isDesktop} />
          <HeroText isDesktop={isDesktop} />
          <Banner isDesktop={isDesktop} />
        </>
      ) : (
        <>
          <div className="relative">
            <VideoBackground isDesktop={isDesktop} />
            <HeroText isDesktop={isDesktop} />
          </div>
          <Banner isDesktop={isDesktop} />
        </>
      )}
    </>
  );
}

export default Home;
